(() => {
  const config = window.SITE_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);

  const setText = (selector, value) => {
    const el = $(selector);
    if (el && value != null) el.textContent = value;
  };

  setText("#profileName", config.name || "Your Name");
  setText("#profileBio", config.bio || "");
  setText("#footerText", config.footer || "YetAnotherLinktree");

  document.title = config.name ? `${config.name} — YetAnotherLinktree` : "YetAnotherLinktree";

  if (config.primary) {
    document.documentElement.style.setProperty("--md-primary", config.primary);
    // A light Material-You-inspired container tint.
    document.documentElement.style.setProperty("--md-primary-container", `${config.primary}22`);
    document.documentElement.style.setProperty("--md-on-primary-container", config.primary);
  }

  const avatar = $("#avatar");
  if (config.avatar) {
    avatar.innerHTML = `<img src="${config.avatar}" alt="${config.name || "Profile"}">`;
  } else {
    avatar.textContent = (config.name || "Y").trim().charAt(0).toUpperCase();
  }

  const links = $("#links");
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
    const looksLikeImagePath = typeof iconValue === "string" && /\.(png|jpe?g|gif|svg|webp|avif|ico)(\?.*)?$/i.test(iconValue);

    if (item.iconImage || looksLikeImagePath) {
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
