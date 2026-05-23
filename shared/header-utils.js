(() => {
  const namespace = window.EssentiaShared || {};

  const normalizeRootPrefix = (prefix) => {
    if (!prefix) {
      return "./";
    }

    return prefix.endsWith("/") ? prefix : `${prefix}/`;
  };

  const getNormalizedPath = () => window.location.pathname.replace(/\\/g, "/");

  const getHeaderContext = () => {
    const path = getNormalizedPath();

    if (path.includes("/neuroflash/")) {
      return "neuroflash";
    }

    if (path.includes("/obsidian/")) {
      return "obsidian";
    }

    return "root";
  };

  const renderInclude = (selector, buildMarkup) => {
    if (typeof buildMarkup !== "function") {
      return;
    }

    document.querySelectorAll(selector).forEach((target) => {
      target.innerHTML = buildMarkup(target);
    });
  };

  window.EssentiaShared = {
    ...namespace,
    header: {
      normalizeRootPrefix,
      getNormalizedPath,
      getHeaderContext,
      renderInclude,
    },
  };
})();
