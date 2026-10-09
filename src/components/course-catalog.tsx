"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CourseCover } from "@/components/course-cover";
import {
  courseCategories,
  type Course,
} from "@/data/courses";
import {
  filterCourses,
  type CourseCategoryFilter,
} from "@/lib/course-filter";

type CourseCatalogProps = {
  courses: Course[];
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function CourseCatalog({ courses }: CourseCatalogProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<CourseCategoryFilter>(
    "Todos",
  );

  const visibleCourses = useMemo(() => {
    return filterCourses(courses, search, activeCategory);
  }, [activeCategory, courses, search]);

  const hasFilters = search.trim().length > 0 || activeCategory !== "Todos";

  function clearFilters() {
    setSearch("");
    setActiveCategory("Todos");
  }

  return (
    <section
      id="cursos"
      aria-labelledby="catalog-title"
      className="scroll-mt-8 bg-canvas px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Catálogo de cursos
          </p>
          <h2
            id="catalog-title"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
          >
            Encontre um tema para explorar.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
            Pesquise por assunto ou escolha uma categoria para encontrar seu
            próximo ponto de partida.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Cursos e instrutores fictícios. Os valores são demonstrativos e não
            representam uma oferta de compra.
          </p>
        </div>

        <div className="mt-9 grid gap-6 rounded-3xl border border-border-subtle bg-surface p-5 shadow-sm shadow-black/[0.18] sm:p-6 lg:grid-cols-[minmax(15rem,0.85fr)_minmax(0,1.5fr)] lg:items-end">
          <div>
            <label
              htmlFor="course-search"
              className="text-sm font-semibold text-foreground"
            >
              Buscar cursos
            </label>
            <div className="relative mt-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-faint"
              >
                <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <input
                id="course-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: React, design ou conteúdo"
                aria-describedby="course-search-help"
                className="min-h-12 w-full rounded-2xl border border-border-subtle bg-surface py-3 pl-12 pr-4 text-sm text-foreground outline-none transition placeholder:text-faint focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/20"
              />
            </div>
            <p id="course-search-help" className="mt-2 text-xs text-muted">
              A busca considera o nome e a descrição do curso.
            </p>
          </div>

          <fieldset className="min-w-0">
            <legend className="text-sm font-semibold text-foreground">
              Filtrar por categoria
            </legend>
            <div className="mt-2 flex flex-wrap gap-2" role="group">
              <button
                type="button"
                aria-pressed={activeCategory === "Todos"}
                onClick={() => setActiveCategory("Todos")}
                className={`min-h-10 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  activeCategory === "Todos"
                    ? "bg-neutral-button text-white"
                    : "bg-surface-raised text-secondary hover:bg-border-subtle"
                }`}
              >
                Todos os cursos
              </button>
              {courseCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-10 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    activeCategory === category
                      ? "bg-neutral-button text-white"
                      : "bg-surface-raised text-secondary hover:bg-border-subtle"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-7 flex min-h-10 flex-wrap items-center justify-between gap-3">
          <p
            className="text-sm font-medium text-secondary"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {visibleCourses.length} {visibleCourses.length === 1 ? "curso encontrado" : "cursos encontrados"}
          </p>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasFilters}
            className="min-h-10 rounded-full px-3 text-sm font-semibold text-accent transition hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:text-disabled disabled:hover:bg-transparent"
          >
            Limpar filtros
          </button>
        </div>

        {visibleCourses.length > 0 ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleCourses.map((course) => (
              <article
                key={course.slug}
                className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-sm shadow-black/[0.18] transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.35]"
              >
                <CourseCover course={course} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent">
                      {course.category}
                    </span>
                    <span
                      className={`text-[0.65rem] font-bold uppercase tracking-[0.12em] ${
                        course.price === 0 ? "text-success" : "text-muted"
                      }`}
                    >
                      {course.price === 0 ? "Gratuito" : "Pago demonstrativo"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.025em] text-foreground">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                    {course.description}
                  </p>

                  <div className="mt-5 border-t border-border-soft pt-4">
                    <p className="text-xs text-faint">Instrutor fictício</p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {course.instructor}
                    </p>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs text-faint">Preço demonstrativo</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">
                        {course.price === 0
                          ? "Gratuito"
                          : currencyFormatter.format(course.price)}
                      </p>
                    </div>
                    <Link
                      href={`/cursos/${course.slug}`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent-button px-4 text-sm font-semibold text-white transition hover:bg-accent-button-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                    >
                      Ver detalhes
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            className="mt-4 rounded-3xl border border-dashed border-border-subtle bg-surface px-6 py-14 text-center"
            role="status"
          >
            <span
              aria-hidden="true"
              className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent-soft text-xl text-accent"
            >
              ?
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Nenhum curso encontrado
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-secondary">
              Tente outro termo ou limpe os filtros para voltar a ver todos os
              cursos disponíveis nesta demonstração.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-button px-5 text-sm font-semibold text-white transition hover:bg-neutral-button-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            >
              Mostrar todos os cursos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
