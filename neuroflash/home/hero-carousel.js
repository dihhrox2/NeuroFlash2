const HERO_DESKTOP_QUERY = window.matchMedia("(min-width: 769px)");
const HERO_REDUCED_MOTION_QUERY = window.matchMedia("(prefers-reduced-motion: reduce)");
const scheduleIdleWork =
  "requestIdleCallback" in window
    ? (callback) => window.requestIdleCallback(callback, { timeout: 1800 })
    : (callback) => window.setTimeout(callback, 280);
const cancelIdleWork =
  "cancelIdleCallback" in window
    ? (id) => window.cancelIdleCallback(id)
    : (id) => window.clearTimeout(id);
const HERO_EXTRA_SLIDES = [
  {
    src: "./home/hero-focus2.jpg",
    alt: "Profissional apresentando em um palco corporativo sob luzes neon em ambiente de alta demanda.",
  },
  {
    src: "./home/hero-focus3.jpg",
    alt: "Reuniao executiva com lider apresentando decisao estrategica em ambiente de pressao.",
  },
];

const createHeroSlide = ({ src, alt }) => {
  const slide = document.createElement("div");
  const image = document.createElement("img");

  slide.className = "hero-carousel-slide";
  slide.setAttribute("data-hero-slide", "");
  slide.setAttribute("aria-hidden", "true");

  image.className = "media-block__image media-cover-image media-image--hero";
  image.src = src;
  image.alt = alt;
  image.width = 2200;
  image.height = 1400;
  image.loading = "lazy";
  image.decoding = "async";

  slide.append(image);

  return slide;
};

const initializeHeroCarousel = () => {
  const carousel = document.querySelector("[data-hero-carousel]");

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector(".hero-carousel-track");
  const previousButton = carousel.querySelector(".hero-carousel-control--prev");
  const nextButton = carousel.querySelector(".hero-carousel-control--next");
  const indicators = carousel.querySelector(".hero-carousel-indicators");

  if (!track || !previousButton || !nextButton || !indicators) {
    return;
  }

  let slides = Array.from(track.querySelectorAll("[data-hero-slide]"));
  let indicatorButtons = [];
  let currentIndex = 0;
  let autoplayTimer = null;
  let isTransitioning = false;
  let hydrationFrame = null;
  let hydrationTask = null;
  let controlsBound = false;

  const autoplayInterval = Number(carousel.dataset.autoplayInterval) || 5000;
  const fadeDuration = 1000;

  const clearAutoplay = () => {
    if (autoplayTimer !== null) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const syncMotionPreference = () => {
    carousel.classList.toggle("is-reduced-motion", HERO_REDUCED_MOTION_QUERY.matches);
  };

  const updateIndicators = () => {
    indicatorButtons.forEach((button, index) => {
      const isActive = index === currentIndex;

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
      if (isActive) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  };

  const updateSlides = () => {
    slides.forEach((slide, index) => {
      const isActive = index === currentIndex;

      slide.classList.toggle("is-active", isActive);
      slide.classList.remove("is-fading-out", "is-fading-in");
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    updateIndicators();
  };

  const waitForFade = () => new Promise((resolve) => {
    window.setTimeout(resolve, fadeDuration);
  });

  const cancelScheduledHydration = () => {
    if (hydrationFrame !== null) {
      window.cancelAnimationFrame(hydrationFrame);
      hydrationFrame = null;
    }

    if (hydrationTask !== null) {
      cancelIdleWork(hydrationTask);
      hydrationTask = null;
    }
  };

  const goToSlide = async (nextIndex) => {
    const targetIndex = (nextIndex + slides.length) % slides.length;

    if (targetIndex === currentIndex || isTransitioning) {
      return;
    }

    if (HERO_REDUCED_MOTION_QUERY.matches) {
      currentIndex = targetIndex;
      updateSlides();
      return;
    }

    isTransitioning = true;

    const currentSlide = slides[currentIndex];
    const targetSlide = slides[targetIndex];

    currentSlide.classList.add("is-fading-out");
    await waitForFade();

    currentSlide.classList.remove("is-active", "is-fading-out");
    currentSlide.setAttribute("aria-hidden", "true");

    currentIndex = targetIndex;
    targetSlide.classList.add("is-active", "is-fading-in");
    targetSlide.setAttribute("aria-hidden", "false");
    updateIndicators();

    await waitForFade();

    targetSlide.classList.remove("is-fading-in");
    isTransitioning = false;
  };

  const startAutoplay = () => {
    clearAutoplay();

    if (!HERO_DESKTOP_QUERY.matches || slides.length < 2) {
      return;
    }

    autoplayTimer = window.setInterval(() => {
      goToSlide(currentIndex + 1);
    }, autoplayInterval);
  };

  const buildIndicators = () => {
    indicators.innerHTML = "";

    indicatorButtons = slides.map((_, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "hero-carousel-indicator";
      button.setAttribute("aria-label", `Mostrar imagem ${index + 1} de ${slides.length}`);
      button.addEventListener("click", () => {
        goToSlide(index);
        startAutoplay();
      });

      indicators.append(button);
      return button;
    });
  };

  const bindControls = () => {
    if (controlsBound) {
      return;
    }

    previousButton.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
      startAutoplay();
    });

    nextButton.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
      startAutoplay();
    });

    controlsBound = true;
  };

  const hydrateSlides = () => {
    if (carousel.dataset.hydrated === "true") {
      syncMotionPreference();
      updateSlides();
      startAutoplay();
      return;
    }

    HERO_EXTRA_SLIDES.forEach((slideData) => {
      track.append(createHeroSlide(slideData));
    });

    slides = Array.from(track.querySelectorAll("[data-hero-slide]"));
    buildIndicators();
    bindControls();
    syncMotionPreference();
    updateSlides();

    carousel.dataset.hydrated = "true";
    previousButton.hidden = false;
    nextButton.hidden = false;
    indicators.hidden = false;
    startAutoplay();
  };

  const scheduleHydration = () => {
    if (carousel.dataset.hydrated === "true") {
      syncMotionPreference();
      updateSlides();
      startAutoplay();
      return;
    }

    if (hydrationFrame !== null || hydrationTask !== null) {
      return;
    }

    hydrationFrame = window.requestAnimationFrame(() => {
      hydrationFrame = null;
      hydrationTask = scheduleIdleWork(() => {
        hydrationTask = null;

        if (!HERO_DESKTOP_QUERY.matches) {
          return;
        }

        hydrateSlides();
      });
    });
  };

  const handleViewportChange = () => {
    if (HERO_DESKTOP_QUERY.matches) {
      scheduleHydration();
      return;
    }

    cancelScheduledHydration();
    clearAutoplay();
  };

  syncMotionPreference();
  HERO_DESKTOP_QUERY.addEventListener("change", handleViewportChange);
  HERO_REDUCED_MOTION_QUERY.addEventListener("change", () => {
    syncMotionPreference();
    startAutoplay();
  });

  handleViewportChange();
};

initializeHeroCarousel();
