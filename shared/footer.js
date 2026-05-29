(() => {
const footer_context_links = {
  root: [
    { href: "index.html", label: "Home" },
    { href: "neuroflash/index.html", label: "NeuroFlash" },
    { href: "obsidian/index.html", label: "Obsidian" },
  ],
  neuroflash: [
    { href: "neuroflash/index.html", label: "Home" },
    { href: "neuroflash/quem-somos/index.html", label: "Nossa Missão" },
    { href: "neuroflash/faq/index.html", label: "FAQ" },
  ],
  obsidian: [
    { href: "obsidian/index.html#intro-completa", label: "Home" },
    { href: "obsidian/nossa-missao/index.html", label: "Nossa Missão" },
  ],
};

const footer_contact_links = [
  { href: "mailto:contato@essentiahealth.com.br", icon: "email.png", label: "contato@essentiahealth.com.br", width: 96, height: 96 },
  { href: "https://www.instagram.com/essentiahealth.br", icon: "instagram.png", label: "@essentiahealth.br", width: 96, height: 96 },
  { href: "https://wa.me/5511999999999", icon: "whatsapp.png", label: "(11) 99999-9999", width: 96, height: 96 },
];

const essentia_footer_copy = {
  logo_alt: "Essentia Health - Soluções inteligentes em saúde e bem-estar",
  company_lines: [
    "CNPJ: 66.907.199/0001-44",
    "Endereço: Av. Papa João Paulo II, 650, apto. 44 - Urbanova VI, São José dos Campos - SP",
    "Atendimento: seg. a sex., 9h às 18h",
  ],
  bottom_text: "&copy; 2026 Essentia Health.",
};

const footer_copy = {
  root: essentia_footer_copy,
  obsidian: essentia_footer_copy,
  neuroflash: {
    logo_alt: "Essentia Health - Soluções inteligentes em saúde e bem-estar",
    company_lines: [
      "CNPJ: 66.907.199/0001-44",
      "Endereço: Av. Papa João Paulo II, 650, apto. 44 - Urbanova VI, São José dos Campos - SP",
      "Atendimento: seg. a sex., 9h às 18h",
    ],
    bottom_text: "&copy; 2026 Essentia Health. NeuroFlash.",
  },
};

const normalize_root_prefix = (prefix) => {
  if (!prefix) {
    return "./";
  }

  return prefix.endsWith("/") ? prefix : `${prefix}/`;
};

const build_anchor = (href, label) => `<a href="${href}">${label}</a>`;
const build_paragraphs = (lines) => lines.map((line) => `<p>${line}</p>`).join("");

const build_site_map_links = (root_prefix, context) =>
  (footer_context_links[context] || footer_context_links.root)
    .map(({ href, label }) => build_anchor(href.startsWith("#") ? href : `${root_prefix}${href}`, label))
    .join("");

const build_contact_links = (root_prefix) =>
  footer_contact_links.map(
    ({ href, icon, label, width, height }) => `
      <a href="${href}">
        <img class="footer-contact-icon" src="${root_prefix}shared/icons/${icon}" alt="" aria-hidden="true" width="${width}" height="${height}" loading="lazy" decoding="async">
        <span>${label}</span>
      </a>
    `.trim(),
  ).join("");

const build_footer = (target) => {
  const context = target.dataset.footerContext || "root";
  const root_prefix = normalize_root_prefix(target.dataset.footerRootPrefix);
  const copy = footer_copy[context] || footer_copy.root;

  return `
    <footer class="footer site-footer footer--${context} deferred-render">
      <div class="footer-shell">
        <section class="footer-brand" aria-label="Essentia Health">
          <a class="footer-brand-link" href="${root_prefix}index.html">
            <img class="footer-brand-logo" src="${root_prefix}shared/essentia-health-logo.png" alt="${copy.logo_alt}" width="779" height="540" loading="lazy" decoding="async">
          </a>
        </section>

        <nav class="footer-column footer-column--centered-title" aria-label="Mapa do site">
          <h3>Mapa do site</h3>
          ${build_site_map_links(root_prefix, context)}
        </nav>

        <address class="footer-column footer-contact">
          <h3>Suporte e contato</h3>
          ${build_contact_links(root_prefix)}
        </address>

        <section class="footer-column footer-column--centered-title">
          <h3>Institucional</h3>
          <div class="footer-subgroup">
            ${build_paragraphs(copy.company_lines)}
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <p>${copy.bottom_text}</p>
      </div>
    </footer>
  `.trim();
};

document.querySelectorAll("[data-shared-footer]").forEach((target) => {
  target.innerHTML = build_footer(target);
});
})();
