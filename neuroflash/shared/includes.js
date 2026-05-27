(() => {
const nested_page_pattern = /\/(home|faq|quem-somos)\/(?:index\.html)?$/;
const site_links = [
  { href: "index.html", page: "home", nav_label: "HOME" },
  { href: "quem-somos/index.html", page: "quem-somos", nav_label: "QUEM SOMOS" },
  { href: "faq/index.html", page: "faq", nav_label: "FAQ" },
];
const shared_include_selectors = [
  ["[data-shared-header]", "header"],
  ["[data-shared-legal-warning]", "legal_warning"],
];
const header_utils = window.EssentiaShared?.header;

const get_normalized_path = () => (header_utils?.get_normalized_path ? header_utils.get_normalized_path() : window.location.pathname.replace(/\\/g, "/"));

const get_shared_path_prefix = () => (nested_page_pattern.test(get_normalized_path()) ? "../" : "./");
const get_current_page = () => {
  const path = get_normalized_path();
  const current_link = site_links.find(({ page }) => path.includes(`/${page}/`));

  return current_link?.page ?? "home";
};

const build_anchor = (href, label, attributes = "") => `<a${attributes} href="${href}">${label}</a>`;
const build_link_group = (links) => links.map(({ href, label, attributes = "" }) => build_anchor(href, label, attributes)).join("");

const build_nav_links = (prefix, current_page) =>
  build_link_group(
    site_links.map(({ href, nav_label, page }) => ({
      href: `${prefix}${href}`,
      label: nav_label,
      attributes: page === current_page ? ' class="is-active" aria-current="page"' : "",
    })),
  );

const build_header = () => {
  const prefix = get_shared_path_prefix();
  const current_page = get_current_page();

  return `
    <header class="home-nav shared-header shared-header--neuroflash">
      <div class="home-nav-inner shared-header__inner">
        <div class="home-brand shared-header__brand">
          <a class="brand-mark" href="${prefix}index.html">NEURO<span>FLASH</span></a>
          <div class="price-badge home-badge">HARDCORE MODE</div>
        </div>
        <nav class="home-menu shared-header__nav" aria-label="Navegação principal">
          ${build_nav_links(prefix, current_page)}
        </nav>
      </div>
    </header>
  `.trim();
};

const shared_includes = {
  header: build_header,
  legal_warning: () => `
    <aside class="warning-box">
      <h3>&#9888; HARDCORE MODE ONLY</h3>
      <p>
        Uso restrito a maiores de 18 anos. Se voc&ecirc; tem sensibilidade &agrave; cafe&iacute;na ou hist&oacute;rico card&iacute;aco,
        este produto <strong>N&Atilde;O</strong> &eacute; para voc&ecirc;. Performance exige responsabilidade.
      </p>
    </aside>
  `.trim(),
};

const render_shared_include = (selector, include_name) => {
  const include = shared_includes[include_name];

  if (!include) {
    console.error(`Shared include failed: ${include_name} component is not registered.`);
    return;
  }

  if (header_utils?.render_include) {
    header_utils.render_include(selector, include);
    return;
  }

  document.querySelectorAll(selector).forEach((target) => {
    target.innerHTML = include(target);
  });
};

shared_include_selectors.forEach(([selector, include_name]) => {
  render_shared_include(selector, include_name);
});
})();
