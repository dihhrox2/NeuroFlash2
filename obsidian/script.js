const root = document.documentElement;
const introCurtain = document.querySelector("[data-intro-curtain]");
const scrollFadeLogo = document.querySelector("[data-scroll-fade-logo]");
const scrollFadeProducts = document.querySelectorAll("[data-scroll-fade-product]");

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

if (!window.location.hash) {
  window.scrollTo(0, 0);
}

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const easeInOut = (value) => value * value * (3 - 2 * value);

const updateIntro = () => {
  const fadeProgress = easeInOut(clamp(window.scrollY / 420));
  const headerProgress = easeInOut(clamp((window.scrollY - 210) / 210));
  const opacity = 1 - fadeProgress;

  root.classList.toggle("intro-dismissed", headerProgress > 0.1);

  if (introCurtain) {
    introCurtain.style.opacity = opacity.toFixed(3);
    introCurtain.style.visibility = fadeProgress >= 1 ? "hidden" : "visible";
    introCurtain.style.transform = `scale(${(1 + fadeProgress * 0.025).toFixed(3)})`;
  }

  if (scrollFadeLogo) {
    scrollFadeLogo.style.opacity = headerProgress.toFixed(3);
  }

  scrollFadeProducts.forEach((scrollFadeProduct) => {
    const productTop = scrollFadeProduct.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const fadeStart = viewportHeight * 0.88;
    const fadeEnd = viewportHeight * 0.42;
    const productProgress = easeInOut(clamp((fadeStart - productTop) / (fadeStart - fadeEnd)));
    const offset = 18 * (1 - productProgress);

    scrollFadeProduct.style.opacity = productProgress.toFixed(3);
    scrollFadeProduct.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  });
};

updateIntro();
window.addEventListener("scroll", updateIntro, { passive: true });
window.addEventListener("resize", updateIntro);
