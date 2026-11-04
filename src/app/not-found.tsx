import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 lg:px-12">
      <h1 className="display text-6xl">Такой страницы нет.</h1>
      <p className="mt-4 text-muted">This page is not here.</p>
      <Link href="/" className="mt-8 inline-block border-b border-ink">
        Maria
      </Link>
    </div>
  );
}
