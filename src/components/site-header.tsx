import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border-soft bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 px-4 py-4 sm:px-8 md:flex md:justify-between md:gap-5 lg:px-12">
        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:order-1"
          aria-label="MStrampos, página inicial"
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-[0.9rem] bg-accent-button text-sm font-bold tracking-[-0.08em] text-white shadow-md shadow-black/30"
          >
            MS
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em] text-foreground sm:text-base">
            MStrampos
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="col-start-1 row-start-2 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-secondary sm:text-sm md:order-2 md:w-auto md:gap-7 lg:gap-9"
        >
          <Link
            href="/#cursos"
            className="transition hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Cursos
          </Link>
          <Link
            href="/#beneficios"
            className="transition hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Benefícios
          </Link>
        </nav>

        <div className="col-start-2 row-start-1 justify-self-end md:order-3">
          <ThemeToggle />
        </div>

        <div className="col-start-2 row-start-2 flex items-center justify-end gap-1.5 md:order-4 md:gap-2 sm:gap-3">
          <Link
            href="/#acesso"
            className="inline-flex min-h-10 items-center justify-center rounded-full px-2.5 text-xs font-semibold text-foreground transition hover:bg-button-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-sm"
          >
            Entrar
          </Link>
          <Link
            href="/#acesso"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-neutral-button px-3 text-xs font-semibold text-white transition hover:bg-neutral-button-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-5 sm:text-sm"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
