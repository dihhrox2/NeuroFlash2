(() => {
  const namespace = window.EssentiaShared || {};

  const get_normalized_path = () => window.location.pathname.replace(/\\/g, "/");

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
      get_normalized_path,
      render_include,
    },
  };
})();
