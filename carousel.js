const carousel = document.querySelector("[data-product-carousel]");

if (carousel) {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const previousButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const indicators = carousel.querySelector("[data-carousel-indicators]");

  let currentIndex = 0;

  const getVisibleCount = () => {
    const rawValue = window.getComputedStyle(carousel).getPropertyValue("--carousel-visible");
    const visibleCount = Number.parseInt(rawValue, 10);

    return Number.isFinite(visibleCount) && visibleCount > 0 ? visibleCount : 1;
  };

  const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

  const getStepSize = () => {
    if (slides.length < 2) {
      return 0;
    }

    const firstSlide = slides[0].getBoundingClientRect();
    const secondSlide = slides[1].getBoundingClientRect();

    return secondSlide.left - firstSlide.left;
  };

  const buildIndicators = () => {
    indicators.innerHTML = "";

    for (let index = 0; index <= getMaxIndex(); index += 1) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "carousel-indicator";
      button.setAttribute("aria-label", `Mostrar produtos a partir do item ${index + 1}`);
      button.addEventListener("click", () => {
        currentIndex = index;
        syncCarousel();
      });

      indicators.append(button);
    }
  };

  const syncSlides = () => {
    const visibleCount = getVisibleCount();

    slides.forEach((slide, index) => {
      const isVisible = index >= currentIndex && index < currentIndex + visibleCount;

      slide.setAttribute("aria-hidden", String(!isVisible));
    });
  };

  const syncIndicators = () => {
    Array.from(indicators.children).forEach((button, index) => {
      const isActive = index === currentIndex;

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  function syncCarousel() {
    const maxIndex = getMaxIndex();

    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
    track.style.transform = `translateX(${-currentIndex * getStepSize()}px)`;

    const hasMultipleGroups = maxIndex > 0;
    previousButton.disabled = !hasMultipleGroups;
    nextButton.disabled = !hasMultipleGroups;

    if (indicators.children.length !== maxIndex + 1) {
      buildIndicators();
    }

    syncSlides();
    syncIndicators();
  }

  previousButton.addEventListener("click", () => {
    const maxIndex = getMaxIndex();

    currentIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    syncCarousel();
  });

  nextButton.addEventListener("click", () => {
    const maxIndex = getMaxIndex();

    currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    syncCarousel();
  });

  window.addEventListener("resize", syncCarousel);
  window.addEventListener("load", syncCarousel);

  buildIndicators();
  syncCarousel();
}
