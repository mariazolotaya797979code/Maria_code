"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { copy, type Dictionary, type Lang } from "@/lib/copy";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageValue | null>(null);
const languageEvent = "maria-lang";

function subscribeLanguage(callback: () => void) {
  window.addEventListener(languageEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(languageEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function readLanguage(): Lang {
  return window.localStorage.getItem("maria-lang") === "en" ? "en" : "ru";
}

function serverLanguage(): Lang {
  return "ru";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribeLanguage, readLanguage, serverLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next: Lang) => {
        window.localStorage.setItem("maria-lang", next);
        window.dispatchEvent(new Event(languageEvent));
      },
      t: copy[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLang must be used within LanguageProvider");
  return value;
}
