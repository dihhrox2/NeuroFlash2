const root = document.documentElement;
const intro_curtain = document.querySelector("[data-intro-curtain]");
const scroll_fade_logo = document.querySelector("[data-scroll-fade-logo]");
const scroll_fade_products = document.querySelectorAll("[data-scroll-fade-product]");

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

if (!window.location.hash) {
  window.scrollTo(0, 0);
}

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const ease_in_out = (value) => value * value * (3 - 2 * value);

const update_intro = () => {
  const fade_progress = ease_in_out(clamp(window.scrollY / 420));
  const header_progress = ease_in_out(clamp((window.scrollY - 210) / 210));
  const opacity = 1 - fade_progress;

  root.classList.toggle("intro-dismissed", header_progress > 0.1);

  if (intro_curtain) {
    intro_curtain.style.opacity = opacity.toFixed(3);
    intro_curtain.style.visibility = fade_progress >= 1 ? "hidden" : "visible";
    intro_curtain.style.transform = `scale(${(1 + fade_progress * 0.025).toFixed(3)})`;
  }

  if (scroll_fade_logo) {
    scroll_fade_logo.style.opacity = header_progress.toFixed(3);
  }

  scroll_fade_products.forEach((scroll_fade_product) => {
    const product_top = scroll_fade_product.getBoundingClientRect().top;
    const viewport_height = window.innerHeight || document.documentElement.clientHeight;
    const fade_start = viewport_height * 0.88;
    const fade_end = viewport_height * 0.42;
    const product_progress = ease_in_out(clamp((fade_start - product_top) / (fade_start - fade_end)));
    const offset = 18 * (1 - product_progress);

    scroll_fade_product.style.opacity = product_progress.toFixed(3);
    scroll_fade_product.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  });
};

update_intro();
window.addEventListener("scroll", update_intro, { passive: true });
window.addEventListener("resize", update_intro);
