import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const benefits = [
  {
    number: "01",
    title: "No seu ritmo",
    description:
      "Estude no momento que fizer sentido para você e retome de onde parou.",
    symbol: "↗",
    color: "bg-[#eeeaff] text-[#6048df]",
  },
  {
    number: "02",
    title: "Tudo organizado",
    description:
      "Encontre aulas e materiais reunidos em uma jornada fácil de acompanhar.",
    symbol: "▤",
    color: "bg-[#e8f4ef] text-[#287858]",
  },
  {
    number: "03",
    title: "Progresso visível",
    description:
      "Acompanhe cada etapa concluída enquanto avança em direção aos seus objetivos.",
    symbol: "⌁",
    color: "bg-[#fff0e5] text-[#c7662b]",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="inicio" className="flex-1">
        <section className="relative isolate overflow-hidden bg-[#f7f6f2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 top-12 -z-10 size-[27rem] rounded-full bg-[#e9e5ff] blur-3xl sm:size-[36rem]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5e1f5] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#6048df] shadow-sm shadow-[#30205b]/5">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#7b68ed]"
                />
                Aprendizado que acompanha você
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#20243a] sm:text-5xl lg:text-6xl">
                Aprenda algo novo.{" "}
                <span className="text-[#6048df]">Avance no seu ritmo.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#666b7d] sm:text-lg sm:leading-8">
                Uma plataforma para descobrir cursos, organizar seus estudos e
                transformar conhecimento em novos passos.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#cursos"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#6048df] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6048df]/20 transition hover:-translate-y-0.5 hover:bg-[#4d37c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
                >
                  Explorar cursos
                  <span aria-hidden="true" className="text-lg leading-none">
                    →
                  </span>
                </Link>
                <Link
                  href="#beneficios"
                  className="inline-flex min-h-13 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#343950] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df]"
                >
                  Conheça a plataforma
                </Link>
              </div>

              <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#e6e4df] pt-6 text-sm text-[#666b7d]">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-[#287858]">✓</span>
                  Estude de onde estiver
                </span>
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-[#287858]">✓</span>
                  Aprendizado organizado
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mr-0">
              <div
                aria-hidden="true"
                className="absolute -left-5 top-14 size-20 rounded-[1.75rem] bg-[#f8c99f] sm:-left-8 sm:size-24"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 right-4 size-24 rounded-full border-[18px] border-[#b7e1ce] sm:right-0 sm:size-32"
              />
              <div className="relative rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-[0_28px_90px_-38px_rgba(49,39,105,0.35)] backdrop-blur sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7a7e8c]">
                    Sua área de aprendizado
                  </p>
                  <span className="rounded-full bg-[#f1efff] px-3 py-1.5 text-xs font-semibold text-[#6048df]">
                    Um passo de cada vez
                  </span>
                </div>

                <div className="mt-9 rounded-[1.5rem] bg-[#252944] p-6 text-white sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/65">Sua próxima etapa</p>
                      <h2 className="mt-3 max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
                        Começa com uma nova ideia.
                      </h2>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#7967ea] text-xl" aria-hidden="true">
                      ✦
                    </span>
                  </div>
                  <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-2/5 rounded-full bg-[#b7e1ce]" />
                  </div>
                  <p className="mt-3 text-xs text-white/60">
                    Um caminho claro para continuar aprendendo
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#f5f3ff] p-4 sm:p-5">
                    <span className="text-xl text-[#6048df]" aria-hidden="true">◷</span>
                    <p className="mt-3 text-sm font-semibold text-[#343950]">
                      Flexível
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#777b89]">
                      No seu tempo
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#edf6f1] p-4 sm:p-5">
                    <span className="text-xl text-[#287858]" aria-hidden="true">◎</span>
                    <p className="mt-3 text-sm font-semibold text-[#343950]">
                      Organizado
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#777b89]">
                      Etapa por etapa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="scroll-mt-8 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6048df]">
                Uma jornada mais leve
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#20243a] sm:text-4xl">
                Aprender fica melhor quando o caminho é claro.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#666b7d]">
                Recursos simples para ajudar você a manter o foco e seguir em
                frente, aula por aula.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-3xl border border-[#eeedf2] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#282344]/5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className={"grid size-12 place-items-center rounded-2xl text-xl " + benefit.color} aria-hidden="true">
                      {benefit.symbol}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.12em] text-[#a0a2ad]">
                      {benefit.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-[#20243a]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#727687]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cursos" className="scroll-mt-8 bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] bg-[#eeeaff] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6048df]">
                Catálogo em preparação
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#20243a] sm:text-4xl">
                Seu próximo curso começa com curiosidade.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#666b7d]">
                Estamos preparando um espaço para você descobrir novos temas e
                escolher por onde quer começar.
              </p>
            </div>
            <Link
              href="#beneficios"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4e3ac7] shadow-sm transition hover:bg-[#faf9ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6048df] md:self-center"
            >
              Conheça os benefícios
              <span aria-hidden="true" className="text-lg leading-none">→</span>
            </Link>
          </div>
        </section>

        <section id="acesso" className="scroll-mt-8 bg-[#252944] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c7bdff]">
                Área do aluno
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Seu espaço de aprendizagem está sendo preparado.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                O cadastro e o acesso à conta serão disponibilizados nas
                próximas etapas do projeto.
              </p>
            </div>
            <Link
              href="#inicio"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Voltar ao início
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
