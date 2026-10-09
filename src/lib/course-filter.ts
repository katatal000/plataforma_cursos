import type { Course, CourseCategory } from "@/data/courses";

export type CourseCategoryFilter = CourseCategory | "Todos";

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
}

export function filterCourses(
  courses: readonly Course[],
  search: string,
  category: CourseCategoryFilter,
): Course[] {
  const query = normalizeText(search.trim());

  return courses.filter((course) => {
    const matchesCategory = category === "Todos" || course.category === category;
    const matchesSearch =
      query.length === 0 ||
      [course.title, course.description, course.category, course.instructor].some(
        (value) => normalizeText(value).includes(query),
      );

    return matchesCategory && matchesSearch;
  });
}
