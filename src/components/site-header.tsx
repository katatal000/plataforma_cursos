import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-[#eeedf2] bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
          aria-label="Plataforma Cursos, página inicial"
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-[0.9rem] bg-[#6048df] text-sm font-bold tracking-[-0.08em] text-white shadow-md shadow-[#6048df]/20"
          >
            PC
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em] text-[#20243a] sm:text-base">
            Plataforma Cursos
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="order-last flex basis-full items-center justify-center gap-7 text-sm font-medium text-[#666b7d] sm:gap-9 md:order-none md:basis-auto"
        >
          <Link
            href="#cursos"
            className="transition hover:text-[#6048df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
          >
            Cursos
          </Link>
          <Link
            href="#beneficios"
            className="transition hover:text-[#6048df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
          >
            Benefícios
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#acesso"
            className="inline-flex min-h-10 items-center justify-center rounded-full px-3 text-sm font-semibold text-[#343950] transition hover:bg-[#f5f3ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6048df] sm:px-4"
          >
            Entrar
          </Link>
          <Link
            href="#acesso"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#252944] px-4 text-sm font-semibold text-white transition hover:bg-[#383d5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6048df] sm:px-5"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
