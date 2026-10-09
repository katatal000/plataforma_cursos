import type { Course, CourseCategory } from "@/data/courses";

const coverStyles: Record<CourseCategory, string> = {
  Programação: "course-cover-programming",
  "Desenvolvimento web": "course-cover-web",
  Design: "course-cover-design",
  "Marketing digital": "course-cover-marketing",
  Informática: "course-cover-computing",
};

type CourseCoverProps = {
  course: Course;
  size?: "card" | "hero";
};

export function CourseCover({ course, size = "card" }: CourseCoverProps) {
  const height = size === "hero" ? "h-64 sm:h-80" : "h-48";

  return (
    <div
      role="img"
      aria-label={`Capa ilustrada do curso ${course.title}`}
      className={`relative isolate ${height} overflow-hidden ${coverStyles[course.category]} text-white`}
    >
      <span
        aria-hidden="true"
        className="absolute -right-9 -top-12 size-44 rounded-full border-[24px] border-white/15 sm:size-52"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-14 -left-8 size-40 rotate-12 rounded-[2.5rem] bg-white/10 sm:size-48"
      />
      <span
        aria-hidden="true"
        className="absolute left-6 top-5 rounded-full border border-white/35 bg-[#191a22]/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] backdrop-blur"
      >
        {course.category}
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-5 right-6 rounded-xl bg-[#191a22]/80 px-3 py-1.5 font-mono text-4xl font-semibold tracking-[-0.08em] text-white/90 sm:bottom-7 sm:right-8 sm:text-5xl"
      >
        {course.coverMark}
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-6 size-2 rounded-full bg-white/80 sm:bottom-8 sm:left-8"
      />
    </div>
  );
}
