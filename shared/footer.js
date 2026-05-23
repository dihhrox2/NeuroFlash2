(() => {
const FOOTER_CONTEXT_LINKS = {
  root: [
    { href: "index.html", label: "Home" },
    { href: "neuroflash/index.html", label: "NeuroFlash" },
    { href: "obsidian/index.html", label: "Obsidian" },
  ],
  neuroflash: [
    { href: "neuroflash/index.html", label: "Home" },
    { href: "neuroflash/quem-somos/index.html", label: "Quem Somos" },
    { href: "neuroflash/faq/index.html", label: "FAQ" },
  ],
  obsidian: [
    { href: "#intro-completa", label: "Home" },
  ],
};

const FOOTER_CONTACT_LINKS = [
  { href: "mailto:contato@essentiahealth.com.br", icon: "email.png", label: "contato@essentiahealth.com.br", width: 315, height: 315 },
  { href: "https://www.instagram.com/essentiahealth.br", icon: "instagram.png", label: "@essentiahealth.br", width: 315, height: 316 },
  { href: "https://wa.me/5511999999999", icon: "whatsapp.png", label: "(11) 99999-9999", width: 316, height: 316 },
];

const FOOTER_COPY = {
  root: {
    logoAlt: "Essentia Health - Solucoes inteligentes em saude e bem-estar",
    companyLines: [
      "CNPJ: 66.907.199/0001-44",
      "Endereco: Av. Papa Joao Paulo II, 650, apto. 44 - Urbanova VI, Sao Jose dos Campos - SP",
      "Atendimento: seg. a sex., 9h as 18h",
    ],
    bottomText: "&copy; 2026 Essentia Health.",
  },
  obsidian: {
    logoAlt: "Essentia Health - Solucoes inteligentes em saude e bem-estar",
    companyLines: [
      "CNPJ: 66.907.199/0001-44",
      "Endereco: Av. Papa Joao Paulo II, 650, apto. 44 - Urbanova VI, Sao Jose dos Campos - SP",
      "Atendimento: seg. a sex., 9h as 18h",
    ],
    bottomText: "&copy; 2026 Essentia Health.",
  },
  neuroflash: {
    logoAlt: "Essentia Health - Solu&ccedil;&otilde;es inteligentes em sa&uacute;de e bem-estar",
    companyLines: [
      "CNPJ: 66.907.199/0001-44",
      "Endere&ccedil;o: Av. Papa Jo&atilde;o Paulo II, 650, apto. 44 - Urbanova VI, S&atilde;o Jos&eacute; dos Campos - SP",
      "Atendimento: seg. a sex., 9h &agrave;s 18h",
    ],
    bottomText: "&copy; 2026 Essentia Health. NeuroFlash.",
  },
};

const normalizeRootPrefix = (prefix) => {
  if (!prefix) {
    return "./";
  }

  return prefix.endsWith("/") ? prefix : `${prefix}/`;
};

const buildAnchor = (href, label) => `<a href="${href}">${label}</a>`;
const buildParagraphs = (lines) => lines.map((line) => `<p>${line}</p>`).join("");

const buildSiteMapLinks = (rootPrefix, context) =>
  (FOOTER_CONTEXT_LINKS[context] || FOOTER_CONTEXT_LINKS.root)
    .map(({ href, label }) => buildAnchor(href.startsWith("#") ? href : `${rootPrefix}${href}`, label))
    .join("");

const buildContactLinks = (rootPrefix) =>
  FOOTER_CONTACT_LINKS.map(
    ({ href, icon, label, width, height }) => `
      <a href="${href}">
        <img class="footer-contact-icon" src="${rootPrefix}shared/icons/${icon}" alt="" aria-hidden="true" width="${width}" height="${height}" loading="lazy" decoding="async">
        <span>${label}</span>
      </a>
    `.trim(),
  ).join("");

const buildFooter = (target) => {
  const context = target.dataset.footerContext || "root";
  const rootPrefix = normalizeRootPrefix(target.dataset.footerRootPrefix);
  const copy = FOOTER_COPY[context] || FOOTER_COPY.root;

  return `
    <footer class="footer site-footer footer--${context} deferred-render">
      <div class="footer-shell">
        <section class="footer-brand" aria-label="Essentia Health">
          <a class="footer-brand-link" href="${rootPrefix}index.html">
            <img class="footer-brand-logo" src="${rootPrefix}shared/essentia-health-logo.png" alt="${copy.logoAlt}" width="1504" height="768" loading="lazy" decoding="async">
          </a>
        </section>

        <nav class="footer-column footer-column--centered-title" aria-label="Mapa do site">
          <h3>Mapa do site</h3>
          ${buildSiteMapLinks(rootPrefix, context)}
        </nav>

        <address class="footer-column footer-contact">
          <h3>Suporte e contato</h3>
          ${buildContactLinks(rootPrefix)}
        </address>

        <section class="footer-column footer-column--centered-title">
          <h3>Institucional</h3>
          <div class="footer-subgroup">
            ${buildParagraphs(copy.companyLines)}
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <p>${copy.bottomText}</p>
      </div>
    </footer>
  `.trim();
};

document.querySelectorAll("[data-shared-footer]").forEach((target) => {
  target.innerHTML = buildFooter(target);
});
})();
