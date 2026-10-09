"use client";

const THEME_STORAGE_KEY = "plataforma-cursos-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Keep the current page usable when browser storage is unavailable.
    }

    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 200);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar entre modo claro e modo escuro"
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border-subtle px-3 text-sm font-semibold text-foreground transition hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-4"
      >
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 3.5a8.5 8.5 0 0 0 0 17v-17Z" fill="currentColor" />
      </svg>
      <span className="hidden sm:inline">Tema</span>
    </button>
  );
}
