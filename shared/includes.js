const NESTED_PAGE_PATTERN = /\/(home|faq|quem-somos)\/(?:index\.html)?$/;
const SITE_LINKS = [
  { href: "index.html", page: "home", navLabel: "HOME", footerLabel: "Home" },
  { href: "quem-somos/index.html", page: "quem-somos", navLabel: "QUEM SOMOS", footerLabel: "Quem Somos" },
  { href: "faq/index.html", page: "faq", navLabel: "FAQ", footerLabel: "FAQ" },
];
const FOOTER_CONTACT_LINKS = [
  { href: "mailto:contato@essentiahealth.com.br", icon: "email.png", label: "contato@essentiahealth.com.br", width: 315, height: 315 },
  { href: "https://www.instagram.com/essentiahealth.br", icon: "instagram.png", label: "@essentiahealth.br", width: 315, height: 316 },
  { href: "https://wa.me/5511999999999", icon: "whatsapp.png", label: "(11) 99999-9999", width: 316, height: 316 },
];
const FOOTER_COMPANY_LINES = [
  "CNPJ: 66.907.199/0001-44",
  "Endere&ccedil;o: Av. Papa Jo&atilde;o Paulo II, 650, apto. 44 - Urbanova VI, S&atilde;o Jos&eacute; dos Campos - SP",
  "Atendimento: seg. a sex., 9h &agrave;s 18h",
];
const SHARED_INCLUDE_SELECTORS = [
  ["[data-shared-header]", "header"],
  ["[data-shared-footer]", "footer"],
  ["[data-shared-legal-warning]", "legalWarning"],
];

const getNormalizedPath = () => window.location.pathname.replace(/\\/g, "/");

const getSharedPathPrefix = () => (NESTED_PAGE_PATTERN.test(getNormalizedPath()) ? "../" : "./");

const getCurrentPage = () => {
  const path = getNormalizedPath();
  const currentLink = SITE_LINKS.find(({ page }) => path.includes(`/${page}/`));

  return currentLink?.page ?? "home";
};

const buildAnchor = (href, label, attributes = "") => `<a${attributes} href="${href}">${label}</a>`;
const buildParagraphs = (lines) => lines.map((line) => `<p>${line}</p>`).join("");
const buildLinkGroup = (links) => links.map(({ href, label, attributes = "" }) => buildAnchor(href, label, attributes)).join("");
const buildContactLinks = (prefix) =>
  FOOTER_CONTACT_LINKS.map(
    ({ href, icon, label, width, height }) => `
      <a href="${href}">
        <img class="footer-contact-icon" src="${prefix}shared/icons/${icon}" alt="" aria-hidden="true" width="${width}" height="${height}" loading="lazy" decoding="async">
        <span>${label}</span>
      </a>
    `.trim(),
  ).join("");

const buildNavLinks = (prefix, currentPage) =>
  buildLinkGroup(
    SITE_LINKS.map(({ href, navLabel, page }) => ({
      href: `${prefix}${href}`,
      label: navLabel,
      attributes: page === currentPage ? ' class="is-active" aria-current="page"' : "",
    })),
  );

const buildSiteMapLinks = (prefix) =>
  buildLinkGroup(SITE_LINKS.map(({ href, footerLabel }) => ({ href: `${prefix}${href}`, label: footerLabel })));

const buildHeader = () => {
  const prefix = getSharedPathPrefix();
  const currentPage = getCurrentPage();

  return `
    <header class="home-nav">
      <div class="home-nav-inner">
        <div class="home-brand">
          <a class="brand-mark" href="${prefix}index.html">NEURO<span>FLASH</span></a>
          <div class="price-badge home-badge">HARDCORE MODE</div>
        </div>
        <nav class="home-menu" aria-label="Navegacao principal">
          ${buildNavLinks(prefix, currentPage)}
        </nav>
      </div>
    </header>
  `.trim();
};

const buildFooter = () => {
  const prefix = getSharedPathPrefix();

  return `
    <footer class="footer deferred-render">
      <div class="footer-shell">
        <section class="footer-brand" aria-label="Essentia Health">
          <img class="footer-brand-logo" src="${prefix}shared/essentia-health-logo.png" alt="Essentia Health - Solu&ccedil;&otilde;es inteligentes em sa&uacute;de e bem-estar" width="1504" height="768" loading="lazy" decoding="async">
        </section>

        <nav class="footer-column footer-column--centered-title" aria-label="Mapa do site">
          <h3>Mapa do site</h3>
          ${buildSiteMapLinks(prefix)}
        </nav>

        <address class="footer-column footer-contact">
          <h3>Suporte e contato</h3>
          ${buildContactLinks(prefix)}
        </address>

        <section class="footer-column footer-column--centered-title">
          <h3>Institucional</h3>
          <div class="footer-subgroup">
            ${buildParagraphs(FOOTER_COMPANY_LINES)}
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Essentia Health. NeuroFlash.</p>
      </div>
    </footer>
  `.trim();
};

const sharedIncludes = {
  header: buildHeader,
  footer: buildFooter,
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

  document.querySelectorAll(selector).forEach((target) => {
    target.innerHTML = include();
  });
};

SHARED_INCLUDE_SELECTORS.forEach(([selector, includeName]) => {
  renderSharedInclude(selector, includeName);
});
