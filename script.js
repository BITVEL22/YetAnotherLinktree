(() => {
  const config = window.SITE_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);
  const root = document.documentElement;

  const setText = (selector, value) => {
    const el = $(selector);
    if (el && value != null) el.textContent = value;
  };

  setText("#profileName", config.name || "Your Name");
  setText("#profileBio", config.bio || "");
  setText("#footerText", config.footer || "YetAnotherLinktree");

  document.title = config.name
    ? `${config.name} — YetAnotherLinktree`
    : "YetAnotherLinktree";

  const themes = {
    light: {
      primary: config.primary || "#6750A4",
      surface: "#FFFBFE",
      surfaceContainer: "#F3EDF7",
      text: "#1D192B",
      textSecondary: "#625D67",
      primaryContainer: "#EADDFF",
      onPrimaryContainer: "#21005D",
      outline: "#79747E"
    },
    dark: {
      primary: config.primary || "#D0BCFF",
      surface: "#141218",
      surfaceContainer: "#211F26",
      text: "#E6E0E9",
      textSecondary: "#CAC4D0",
      primaryContainer: "#4F378B",
      onPrimaryContainer: "#EADDFF",
      outline: "#938F99"
    },
    "solarized-dark": {
      primary: config.primary || "#2AA198",
      surface: "#002B36",
      surfaceContainer: "#073642",
      text: "#EEE8D5",
      textSecondary: "#93A1A1",
      primaryContainer: "#164B52",
      onPrimaryContainer: "#BFE8E4",
      outline: "#586E75"
    }
  };

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const activeTheme = config.theme || "light";

  function resolveTheme() {
    if (activeTheme === "system") {
      return systemDark.matches ? "dark" : "light";
    }
    return themes[activeTheme] ? activeTheme : "light";
  }

  function applyTheme() {
    const theme = themes[resolveTheme()];

    root.dataset.theme = resolveTheme();
    root.style.setProperty("--md-primary", theme.primary);
    root.style.setProperty("--md-surface", theme.surface);
    root.style.setProperty("--md-surface-container", theme.surfaceContainer);
    root.style.setProperty("--md-on-surface", theme.text);
    root.style.setProperty("--md-on-surface-variant", theme.textSecondary);
    root.style.setProperty("--md-primary-container", theme.primaryContainer);
    root.style.setProperty("--md-on-primary-container", theme.onPrimaryContainer);
    root.style.setProperty("--md-outline", theme.outline);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute("content", theme.surface);
  }

  applyTheme();

  if (systemDark.addEventListener) {
    systemDark.addEventListener("change", () => {
      if (activeTheme === "system") applyTheme();
    });
  }

  const avatar = $("#avatar");

  if (config.avatar) {
    const img = document.createElement("img");
    img.src = config.avatar;
    img.alt = config.name || "Profile";
    avatar.replaceChildren(img);
  } else {
    avatar.textContent = (config.name || "Y").trim().charAt(0).toUpperCase();
  }

  const links = $("#links");

  const isImageSource = (value) =>
    typeof value === "string" &&
    /(?:\.(png|jpe?g|gif|svg|webp|avif|ico)(?:[?#].*)?$)|^(?:https?:)?\/\//i.test(value);

  (config.links || []).forEach((item) => {
    if (!item?.url || !item?.title) return;

    const a = document.createElement("a");
    a.className = "link-card";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", item.title);

    const icon = document.createElement("span");
    icon.className = "link-icon";

    const iconValue = item.iconImage || item.icon;

    if (item.iconImage || isImageSource(iconValue)) {
      const img = document.createElement("img");
      img.src = item.iconImage || item.icon;
      img.alt = "";
      icon.appendChild(img);
    } else {
      icon.textContent = item.icon || item.title.slice(0, 2).toUpperCase();
    }

    const copy = document.createElement("span");
    copy.className = "link-copy";

    const title = document.createElement("span");
    title.className = "link-title";
    title.textContent = item.title;
    copy.appendChild(title);

    if (item.description) {
      const description = document.createElement("span");
      description.className = "link-description";
      description.textContent = item.description;
      copy.appendChild(description);
    }

    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "›";

    a.append(icon, copy, arrow);
    links.appendChild(a);
  });
})();
