import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-surface px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-border-soft pt-7 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span aria-hidden="true" className="text-accent">✦</span>
          MStrampos
        </Link>
        <p className="text-xs leading-5 text-faint">
          Aprender, praticar e avançar — um passo de cada vez.
        </p>
        <Link
          href="/#inicio"
          className="w-fit rounded-lg text-sm font-medium text-secondary transition hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Voltar ao início ↑
        </Link>
      </div>
    </footer>
  );
}
