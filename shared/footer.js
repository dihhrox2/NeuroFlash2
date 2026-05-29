(() => {
const footer_context_links = {
  root: [
    { href: "", label: "Home" },
    { href: "neuroflash/", label: "NeuroFlash" },
    { href: "obsidian/", label: "Obsidian" },
  ],
  neuroflash: [
    { href: "neuroflash/", label: "Home" },
    { href: "neuroflash/quem-somos/", label: "Nossa Missão" },
    { href: "neuroflash/faq/", label: "FAQ" },
  ],
  obsidian: [
    { href: "obsidian/#intro-completa", label: "Home" },
    { href: "obsidian/nossa-missao/", label: "Nossa Missão" },
  ],
};

const footer_contact_links = [
  { href: "mailto:contato@essentiahealth.com.br", icon: "email.png", icon_small: "email-32.png", label: "contato@essentiahealth.com.br", width: 96, height: 96 },
  { href: "https://www.instagram.com/essentiahealth.br", icon: "instagram.png", icon_small: "instagram-32.png", label: "@essentiahealth.br", width: 96, height: 96 },
  { href: "https://wa.me/5511999999999", icon: "whatsapp.png", icon_small: "whatsapp-32.png", label: "(11) 99999-9999", width: 96, height: 96 },
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
    ({ href, icon, icon_small, label, width, height }) => `
      <a href="${href}">
        <img class="footer-contact-icon" src="${root_prefix}shared/icons/${icon}" srcset="${root_prefix}shared/icons/${icon_small} 32w, ${root_prefix}shared/icons/${icon.replace(".png", "-64.png")} 64w, ${root_prefix}shared/icons/${icon} 96w" sizes="32px" alt="" aria-hidden="true" width="${width}" height="${height}" loading="lazy" decoding="async">
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
          <a class="footer-brand-link" href="${root_prefix}">
            <img class="footer-brand-logo" src="${root_prefix}shared/essentia-health-logo.png" srcset="${root_prefix}shared/essentia-health-logo-240.png 240w, ${root_prefix}shared/essentia-health-logo.png 779w" sizes="240px" alt="${copy.logo_alt}" width="779" height="540" loading="lazy" decoding="async">
          </a>
        </section>

        <nav class="footer-column footer-column--centered-title" aria-label="Mapa do site">
          <h2 class="footer-heading">Mapa do site</h2>
          ${build_site_map_links(root_prefix, context)}
        </nav>

        <address class="footer-column footer-contact">
          <h2 class="footer-heading">Suporte e contato</h2>
          ${build_contact_links(root_prefix)}
        </address>

        <section class="footer-column footer-column--centered-title">
          <h2 class="footer-heading">Institucional</h2>
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
