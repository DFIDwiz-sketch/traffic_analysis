(() => {
  const storageKey = "traffic-analysis-theme";
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeColor.content = theme === "dark" ? "#0b1220" : "#f5f7fb";
  }

  function preferredTheme(fallback = "light") {
    try {
      return localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
    } catch {
      return fallback;
    }
  }

  let theme = preferredTheme();
  applyTheme(theme);

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("[data-theme-toggle]");
    button.setAttribute("aria-pressed", theme === "dark");

    function updateTheme(value) {
      theme = value;
      applyTheme(theme);
      button.setAttribute("aria-pressed", theme === "dark");
    }

    button.addEventListener("click", () => {
      updateTheme(theme === "dark" ? "light" : "dark");
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // The switch still works for the current page.
      }
    });

    window.addEventListener("pageshow", event => {
      if (event.persisted) updateTheme(preferredTheme(theme));
    });
  });
})();
