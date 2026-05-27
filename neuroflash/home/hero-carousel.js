const hero_desktop_query = window.matchMedia("(min-width: 769px)");
const hero_reduced_motion_query = window.matchMedia("(prefers-reduced-motion: reduce)");
const schedule_idle_work =
  "requestIdleCallback" in window
    ? (callback) => window.requestIdleCallback(callback, { timeout: 1800 })
    : (callback) => window.setTimeout(callback, 280);
const cancel_idle_work =
  "cancelIdleCallback" in window
    ? (id) => window.cancelIdleCallback(id)
    : (id) => window.clearTimeout(id);
const hero_extra_slides = [
  {
    src: "./home/hero-focus2.jpg",
    alt: "Profissional apresentando em um palco corporativo sob luzes neon em ambiente de alta demanda.",
  },
  {
    src: "./home/hero-focus3.jpg",
    alt: "Reunião executiva com líder apresentando decisão estratégica em ambiente de pressão.",
  },
];

const create_hero_slide = ({ src, alt }) => {
  const slide = document.createElement("div");
  const image = document.createElement("img");

  slide.className = "hero-carousel-slide";
  slide.setAttribute("data-hero-slide", "");
  slide.setAttribute("aria-hidden", "true");

  image.className = "media-block__image media-cover-image media-image--hero";
  image.src = src;
  image.alt = alt;
  image.width = 1439;
  image.height = 916;
  image.loading = "lazy";
  image.decoding = "async";

  slide.append(image);

  return slide;
};

const initialize_hero_carousel = () => {
  const carousel = document.querySelector("[data-hero-carousel]");

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector(".hero-carousel-track");
  const previous_button = carousel.querySelector(".hero-carousel-control--prev");
  const next_button = carousel.querySelector(".hero-carousel-control--next");
  const indicators = carousel.querySelector(".hero-carousel-indicators");

  if (!track || !previous_button || !next_button || !indicators) {
    return;
  }

  let slides = Array.from(track.querySelectorAll("[data-hero-slide]"));
  let indicator_buttons = [];
  let current_index = 0;
  let autoplay_timer = null;
  let is_transitioning = false;
  let hydration_frame = null;
  let hydration_task = null;
  let controls_bound = false;

  const autoplay_interval = Number(carousel.dataset.autoplayInterval) || 5000;
  const fade_duration = 1000;

  const clear_autoplay = () => {
    if (autoplay_timer !== null) {
      window.clearInterval(autoplay_timer);
      autoplay_timer = null;
    }
  };

  const sync_motion_preference = () => {
    carousel.classList.toggle("is-reduced-motion", hero_reduced_motion_query.matches);
  };

  const update_indicators = () => {
    indicator_buttons.forEach((button, index) => {
      const is_active = index === current_index;

      button.classList.toggle("is-active", is_active);
      button.setAttribute("aria-pressed", String(is_active));
      if (is_active) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  };

  const update_slides = () => {
    slides.forEach((slide, index) => {
      const is_active = index === current_index;

      slide.classList.toggle("is-active", is_active);
      slide.classList.remove("is-fading-out", "is-fading-in");
      slide.setAttribute("aria-hidden", String(!is_active));
    });

    update_indicators();
  };

  const wait_for_fade = () => new Promise((resolve) => {
    window.setTimeout(resolve, fade_duration);
  });

  const cancel_scheduled_hydration = () => {
    if (hydration_frame !== null) {
      window.cancelAnimationFrame(hydration_frame);
      hydration_frame = null;
    }

    if (hydration_task !== null) {
      cancel_idle_work(hydration_task);
      hydration_task = null;
    }
  };

  const go_to_slide = async (next_index) => {
    const target_index = (next_index + slides.length) % slides.length;

    if (target_index === current_index || is_transitioning) {
      return;
    }

    if (hero_reduced_motion_query.matches) {
      current_index = target_index;
      update_slides();
      return;
    }

    is_transitioning = true;

    const current_slide = slides[current_index];
    const target_slide = slides[target_index];

    current_slide.classList.add("is-fading-out");
    await wait_for_fade();

    current_slide.classList.remove("is-active", "is-fading-out");
    current_slide.setAttribute("aria-hidden", "true");

    current_index = target_index;
    target_slide.classList.add("is-active", "is-fading-in");
    target_slide.setAttribute("aria-hidden", "false");
    update_indicators();

    await wait_for_fade();

    target_slide.classList.remove("is-fading-in");
    is_transitioning = false;
  };

  const start_autoplay = () => {
    clear_autoplay();

    if (!hero_desktop_query.matches || slides.length < 2) {
      return;
    }

    autoplay_timer = window.setInterval(() => {
      go_to_slide(current_index + 1);
    }, autoplay_interval);
  };

  const build_indicators = () => {
    indicators.innerHTML = "";

    indicator_buttons = slides.map((_, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "hero-carousel-indicator";
      button.setAttribute("aria-label", `Mostrar imagem ${index + 1} de ${slides.length}`);
      button.addEventListener("click", () => {
        go_to_slide(index);
        start_autoplay();
      });

      indicators.append(button);
      return button;
    });
  };

  const bind_controls = () => {
    if (controls_bound) {
      return;
    }

    previous_button.addEventListener("click", () => {
      go_to_slide(current_index - 1);
      start_autoplay();
    });

    next_button.addEventListener("click", () => {
      go_to_slide(current_index + 1);
      start_autoplay();
    });

    controls_bound = true;
  };

  const hydrate_slides = () => {
    if (carousel.dataset.hydrated === "true") {
      sync_motion_preference();
      update_slides();
      start_autoplay();
      return;
    }

    hero_extra_slides.forEach((slide_data) => {
      track.append(create_hero_slide(slide_data));
    });

    slides = Array.from(track.querySelectorAll("[data-hero-slide]"));
    build_indicators();
    bind_controls();
    sync_motion_preference();
    update_slides();

    carousel.dataset.hydrated = "true";
    previous_button.hidden = false;
    next_button.hidden = false;
    indicators.hidden = false;
    start_autoplay();
  };

  const schedule_hydration = () => {
    if (carousel.dataset.hydrated === "true") {
      sync_motion_preference();
      update_slides();
      start_autoplay();
      return;
    }

    if (hydration_frame !== null || hydration_task !== null) {
      return;
    }

    hydration_frame = window.requestAnimationFrame(() => {
      hydration_frame = null;
      hydration_task = schedule_idle_work(() => {
        hydration_task = null;

        if (!hero_desktop_query.matches) {
          return;
        }

        hydrate_slides();
      });
    });
  };

  const handle_viewport_change = () => {
    if (hero_desktop_query.matches) {
      schedule_hydration();
      return;
    }

    cancel_scheduled_hydration();
    clear_autoplay();
  };

  sync_motion_preference();
  hero_desktop_query.addEventListener("change", handle_viewport_change);
  hero_reduced_motion_query.addEventListener("change", () => {
    sync_motion_preference();
    start_autoplay();
  });

  handle_viewport_change();
};

initialize_hero_carousel();
