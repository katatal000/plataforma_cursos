import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-white px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-[#eeedf2] pt-7 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-[#343950] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
        >
          <span aria-hidden="true" className="text-[#6048df]">✦</span>
          Plataforma Cursos
        </Link>
        <p className="text-xs leading-5 text-[#858896]">
          Aprender, praticar e avançar — um passo de cada vez.
        </p>
        <Link
          href="#inicio"
          className="w-fit rounded-lg text-sm font-medium text-[#666b7d] transition hover:text-[#6048df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
        >
          Voltar ao início ↑
        </Link>
      </div>
    </footer>
  );
}
