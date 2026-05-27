(() => {
  const namespace = window.EssentiaShared || {};

  const normalize_root_prefix = (prefix) => {
    if (!prefix) {
      return "./";
    }

    return prefix.endsWith("/") ? prefix : `${prefix}/`;
  };

  const get_normalized_path = () => window.location.pathname.replace(/\\/g, "/");

  const get_header_context = () => {
    const path = get_normalized_path();

    if (path.includes("/neuroflash/")) {
      return "neuroflash";
    }

    if (path.includes("/obsidian/")) {
      return "obsidian";
    }

    return "root";
  };

  const render_include = (selector, build_markup) => {
    if (typeof build_markup !== "function") {
      return;
    }

    document.querySelectorAll(selector).forEach((target) => {
      target.innerHTML = build_markup(target);
    });
  };

  window.EssentiaShared = {
    ...namespace,
    header: {
      normalize_root_prefix,
      get_normalized_path,
      get_header_context,
      render_include,
    },
  };
})();
