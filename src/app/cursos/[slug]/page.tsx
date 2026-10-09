import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseCover } from "@/components/course-cover";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { demoCourses, getCourseBySlug } from "@/data/courses";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function generateStaticParams() {
  return demoCourses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-canvas px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#cursos"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg text-sm font-semibold text-accent transition hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span aria-hidden="true">←</span>
            Voltar ao catálogo
          </Link>

          <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:items-start">
            <article className="overflow-hidden rounded-[2rem] border border-border-subtle bg-surface shadow-sm shadow-black/[0.2]">
              <CourseCover course={course} size="hero" />
              <div className="p-6 sm:p-9 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {course.category}
                </p>
                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                  {course.title}
                </h1>
                <p className="mt-5 text-base leading-7 text-secondary">
                  {course.description}
                </p>

                <div className="mt-8 rounded-2xl bg-canvas p-5 sm:p-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    O que você vai explorar
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-sm leading-6 text-secondary">
                        <span
                          aria-hidden="true"
                          className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-success-soft text-xs font-bold text-success"
                        >
                          ✓
                        </span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <aside className="rounded-[2rem] border border-border-subtle bg-surface p-6 shadow-sm shadow-black/[0.2] sm:p-8 lg:sticky lg:top-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Sobre esta demonstração
              </p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs text-faint">Instrutor fictício</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {course.instructor}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-faint">Categoria</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {course.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-faint">Preço demonstrativo</dt>
                  <dd className="mt-1 text-xl font-semibold text-foreground">
                    {course.price === 0
                      ? "Gratuito"
                      : currencyFormatter.format(course.price)}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 rounded-2xl bg-accent-soft p-4">
                <p className="text-sm font-semibold text-accent-soft-foreground">
                  Matrículas indisponíveis nesta etapa
                </p>
                <p className="mt-2 text-xs leading-5 text-secondary">
                  Esta página apresenta conteúdo fictício. Não há compra nem
                  matrícula real.
                </p>
              </div>
              <Link
                href="/#cursos"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-neutral-button px-5 text-sm font-semibold text-white transition hover:bg-neutral-button-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
              >
                Voltar ao catálogo
              </Link>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
