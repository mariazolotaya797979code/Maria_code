"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import { mailHref, site, telegramHref } from "@/lib/site";
import { useLang } from "@/lib/i18n";

type Draft = {
  format: string;
  task: string;
  audience: string;
  pains: string[];
  timing: string;
  name: string;
  contact: string;
  consent: boolean;
  company: string;
};

const empty: Draft = {
  format: "",
  task: "",
  audience: "",
  pains: [],
  timing: "",
  name: "",
  contact: "",
  consent: false,
  company: "",
};

const storageKey = "maria-brief-draft";
let currentDraft: Draft = empty;
let draftLoaded = false;
const draftListeners = new Set<() => void>();

function subscribeDraft(listener: () => void) {
  draftListeners.add(listener);
  return () => draftListeners.delete(listener);
}

function readStoredDraft() {
  if (draftLoaded || typeof window === "undefined") return currentDraft;
  draftLoaded = true;
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) return currentDraft;
  try {
    const saved = JSON.parse(raw) as Partial<Draft>;
    currentDraft = {
      ...empty,
      ...saved,
      pains: Array.isArray(saved.pains) ? saved.pains : [],
      company: "",
    };
  } catch {
    window.localStorage.removeItem(storageKey);
  }
  return currentDraft;
}

function serverDraft() {
  return empty;
}

function commitDraft(next: Draft) {
  currentDraft = next;
  window.localStorage.setItem(storageKey, JSON.stringify({ ...next, company: "" }));
  draftListeners.forEach((listener) => listener());
}

function wipeDraft() {
  currentDraft = empty;
  window.localStorage.removeItem(storageKey);
  draftListeners.forEach((listener) => listener());
}

export function BriefForm() {
  const { t } = useLang();
  const draft = useSyncExternalStore(subscribeDraft, readStoredDraft, serverDraft);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const labels = useMemo(() => t.brief, [t]);

  function update(partial: Partial<Draft>) {
    commitDraft({ ...draft, ...partial });
    setError("");
  }

  function togglePain(id: string) {
    const pains = draft.pains.includes(id)
      ? draft.pains.filter((item) => item !== id)
      : [...draft.pains, id];
    commitDraft({ ...draft, pains });
    setError("");
  }

  function validate(index: number) {
    if (index === 0 && !draft.format) return labels.errors.format;
    if (index === 1 && draft.task.trim().length < 8) return labels.errors.task;
    if (index === 2 && !draft.audience) return labels.errors.audience;
    if (index === 3 && draft.pains.length === 0) return labels.errors.pain;
    if (index === 4 && !draft.timing) return labels.errors.timing;
    if (index === 5) {
      if (draft.name.trim().length < 2) return labels.errors.name;
      if (draft.contact.trim().length < 3) return labels.errors.contact;
      if (!draft.consent) return labels.errors.consent;
    }
    return "";
  }

  function compose() {
    const format = labels.formats[draft.format as keyof typeof labels.formats];
    const audience = labels.audiences[draft.audience as keyof typeof labels.audiences];
    const timing = labels.timings[draft.timing as keyof typeof labels.timings];
    const pains = draft.pains
      .map((id) => labels.pains[id as keyof typeof labels.pains])
      .filter(Boolean)
      .join(", ");
    return [
      labels.messageIntro,
      "",
      `${labels.formatTitle} ${format}`,
      `${labels.taskTitle} ${draft.task.trim()}`,
      `${labels.audienceTitle} ${audience}`,
      `${labels.painTitle} ${pains}`,
      `${labels.timingTitle} ${timing}`,
      `${labels.name}: ${draft.name.trim()}`,
      `${labels.contact}: ${draft.contact.trim()}`,
    ].join("\n");
  }

  function goNext() {
    const problem = validate(step);
    if (problem) {
      setError(problem);
      return;
    }
    setStep((current) => Math.min(current + 1, 5));
  }

  function submit() {
    const problem = validate(5);
    if (problem) {
      setError(problem);
      return;
    }
    if (draft.company) {
      setDone(true);
      return;
    }
    const text = compose();
    const name = draft.name.trim();
    setMessage(text);
    setSubjectName(name);
    const popup = window.open(telegramHref(text), "_blank", "noopener,noreferrer");
    setBlocked(!popup);
    setDone(true);
    wipeDraft();
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function reset() {
    wipeDraft();
    setStep(0);
    setDone(false);
    setBlocked(false);
    setCopied(false);
    setMessage("");
    setError("");
  }

  const progress = ((step + 1) / 6) * 100;

  return (
    <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:px-12 lg:py-24">
      <div>
        <p className="kicker text-brass-deep">{labels.kicker}</p>
        <h1 className="display mt-4 text-6xl md:text-7xl">{labels.title}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{labels.lead}</p>
        <p className="mt-6 max-w-md border-t border-line pt-6 text-sm leading-relaxed text-muted">
          {labels.price}
        </p>
        <p className="mt-8 text-sm">
          <a href={site.telegramUrl} className="border-b border-ink">
            @{site.telegram}
          </a>
          <span className="mx-3 text-line">/</span>
          <a href={`mailto:${site.email}`} className="border-b border-ink">
            {site.email}
          </a>
        </p>
      </div>

      <div className="border border-line bg-paper p-6 md:p-10">
        {done ? (
          <div>
            <p className="kicker text-brass-deep">06</p>
            <h2 className="display mt-4 text-5xl">{labels.successTitle}</h2>
            <p className="mt-4 text-muted">{labels.successLead}</p>
            {blocked ? <p className="mt-4 text-sm text-brass-deep">{labels.blocked}</p> : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={telegramHref(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-5 py-3 text-center text-paper"
              >
                {labels.openTelegram}
              </a>
              <a
                href={mailHref(`${labels.subject} — ${subjectName}`, message)}
                className="rounded-full border border-ink px-5 py-3 text-center"
              >
                {labels.openMail}
              </a>
            </div>
            <button type="button" onClick={copyText} className="mt-4 text-sm underline underline-offset-4">
              {copied ? labels.copied : labels.copy}
            </button>
            <pre className="mt-8 max-h-72 overflow-auto whitespace-pre-wrap bg-paper-deep p-5 text-sm leading-relaxed">
              {message}
            </pre>
            <button type="button" onClick={reset} className="mt-6 text-sm text-muted">
              {labels.again}
            </button>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (step < 5) goNext();
              else submit();
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="kicker text-brass-deep">
                {labels.step} 0{step + 1} / 06
              </p>
              <div className="h-px flex-1 bg-line">
                <div className="h-px bg-brass-deep" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="mt-8">
              {step === 0 ? (
                <Choice
                  title={labels.formatTitle}
                  hint={labels.formatHint}
                  options={labels.formats}
                  value={draft.format}
                  onChange={(format) => update({ format })}
                />
              ) : null}
              {step === 1 ? (
                <fieldset>
                  <legend className="display text-4xl">{labels.taskTitle}</legend>
                  <p className="mt-3 text-sm text-muted">{labels.taskHint}</p>
                  <textarea
                    value={draft.task}
                    onChange={(event) => update({ task: event.target.value })}
                    placeholder={labels.taskPlaceholder}
                    rows={5}
                    className="mt-6 w-full resize-y border border-line bg-transparent px-4 py-3 outline-none"
                  />
                </fieldset>
              ) : null}
              {step === 2 ? (
                <Choice
                  title={labels.audienceTitle}
                  options={labels.audiences}
                  value={draft.audience}
                  onChange={(audience) => update({ audience })}
                />
              ) : null}
              {step === 3 ? (
                <fieldset>
                  <legend className="display text-4xl">{labels.painTitle}</legend>
                  <p className="mt-3 text-sm text-muted">{labels.painHint}</p>
                  <div className="mt-6 grid gap-2">
                    {Object.entries(labels.pains).map(([id, label]) => {
                      const selected = draft.pains.includes(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => togglePain(id)}
                          className={`border px-4 py-3 text-left ${
                            selected ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ) : null}
              {step === 4 ? (
                <Choice
                  title={labels.timingTitle}
                  options={labels.timings}
                  value={draft.timing}
                  onChange={(timing) => update({ timing })}
                />
              ) : null}
              {step === 5 ? (
                <fieldset className="grid gap-4">
                  <legend className="display text-4xl">{labels.contactTitle}</legend>
                  <label className="mt-4 grid gap-2 text-sm">
                    {labels.name}
                    <input
                      value={draft.name}
                      onChange={(event) => update({ name: event.target.value })}
                      autoComplete="name"
                      className="border border-line bg-transparent px-4 py-3 text-base"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    {labels.contact}
                    <input
                      value={draft.contact}
                      onChange={(event) => update({ contact: event.target.value })}
                      autoComplete="on"
                      className="border border-line bg-transparent px-4 py-3 text-base"
                    />
                  </label>
                  <label className="flex items-start gap-3 text-sm leading-relaxed">
                    <input
                      type="checkbox"
                      checked={draft.consent}
                      onChange={(event) => update({ consent: event.target.checked })}
                      className="mt-1"
                    />
                    <span>
                      {labels.consent}{" "}
                      <Link href="/privacy" className="underline underline-offset-4">
                        {labels.privacy}
                      </Link>
                    </span>
                  </label>
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Company
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={draft.company}
                        onChange={(event) => update({ company: event.target.value })}
                      />
                    </label>
                  </div>
                </fieldset>
              ) : null}
            </div>

            {error ? (
              <p className="mt-4 text-sm text-brass-deep" role="alert">
                {error}
              </p>
            ) : null}

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setError("");
                  setStep((current) => Math.max(0, current - 1));
                }}
                className={`text-sm ${step === 0 ? "invisible" : ""}`}
              >
                {labels.back}
              </button>
              <button type="submit" className="rounded-full bg-ink px-6 py-3 text-paper hover:bg-brass-deep">
                {step === 5 ? labels.submit : labels.next}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Choice({
  title,
  hint,
  options,
  value,
  onChange,
}: {
  title: string;
  hint?: string;
  options: Record<string, string>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="display text-4xl">{title}</legend>
      {hint ? <p className="mt-3 text-sm text-muted">{hint}</p> : null}
      <div className="mt-6 grid gap-2">
        {Object.entries(options).map(([id, label]) => {
          const selected = value === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(id)}
              className={`border px-4 py-3 text-left ${
                selected ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
