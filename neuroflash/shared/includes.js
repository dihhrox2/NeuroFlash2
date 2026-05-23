(() => {
const NESTED_PAGE_PATTERN = /\/(home|faq|quem-somos)\/(?:index\.html)?$/;
const SITE_LINKS = [
  { href: "index.html", page: "home", navLabel: "HOME" },
  { href: "quem-somos/index.html", page: "quem-somos", navLabel: "QUEM SOMOS" },
  { href: "faq/index.html", page: "faq", navLabel: "FAQ" },
];
const SHARED_INCLUDE_SELECTORS = [
  ["[data-shared-header]", "header"],
  ["[data-shared-legal-warning]", "legalWarning"],
];
const headerUtils = window.EssentiaShared?.header;

const getNormalizedPath = () => (headerUtils?.getNormalizedPath ? headerUtils.getNormalizedPath() : window.location.pathname.replace(/\\/g, "/"));

const getSharedPathPrefix = () => (NESTED_PAGE_PATTERN.test(getNormalizedPath()) ? "../" : "./");
const getCurrentPage = () => {
  const path = getNormalizedPath();
  const currentLink = SITE_LINKS.find(({ page }) => path.includes(`/${page}/`));

  return currentLink?.page ?? "home";
};

const buildAnchor = (href, label, attributes = "") => `<a${attributes} href="${href}">${label}</a>`;
const buildLinkGroup = (links) => links.map(({ href, label, attributes = "" }) => buildAnchor(href, label, attributes)).join("");

const buildNavLinks = (prefix, currentPage) =>
  buildLinkGroup(
    SITE_LINKS.map(({ href, navLabel, page }) => ({
      href: `${prefix}${href}`,
      label: navLabel,
      attributes: page === currentPage ? ' class="is-active" aria-current="page"' : "",
    })),
  );

const buildHeader = () => {
  const prefix = getSharedPathPrefix();
  const currentPage = getCurrentPage();

  return `
    <header class="home-nav shared-header shared-header--neuroflash">
      <div class="home-nav-inner shared-header__inner">
        <div class="home-brand shared-header__brand">
          <a class="brand-mark" href="${prefix}index.html">NEURO<span>FLASH</span></a>
          <div class="price-badge home-badge">HARDCORE MODE</div>
        </div>
        <nav class="home-menu shared-header__nav" aria-label="Navegacao principal">
          ${buildNavLinks(prefix, currentPage)}
        </nav>
      </div>
    </header>
  `.trim();
};

const sharedIncludes = {
  header: buildHeader,
  legalWarning: () => `
    <aside class="warning-box">
      <h3>&#9888; HARDCORE MODE ONLY</h3>
      <p>
        Uso restrito a maiores de 18 anos. Se voc&ecirc; tem sensibilidade &agrave; cafe&iacute;na ou hist&oacute;rico card&iacute;aco,
        este produto <strong>N&Atilde;O</strong> &eacute; para voc&ecirc;. Performance exige responsabilidade.
      </p>
    </aside>
  `.trim(),
};

const renderSharedInclude = (selector, includeName) => {
  const include = sharedIncludes[includeName];

  if (!include) {
    console.error(`Shared include failed: ${includeName} component is not registered.`);
    return;
  }

  if (headerUtils?.renderInclude) {
    headerUtils.renderInclude(selector, include);
    return;
  }

  document.querySelectorAll(selector).forEach((target) => {
    target.innerHTML = include(target);
  });
};

SHARED_INCLUDE_SELECTORS.forEach(([selector, includeName]) => {
  renderSharedInclude(selector, includeName);
});
})();
