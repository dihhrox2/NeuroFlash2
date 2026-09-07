(() => {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector(".hero-carousel-track");
  const previous_button = carousel.querySelector(".hero-carousel-control--prev");
  const next_button = carousel.querySelector(".hero-carousel-control--next");
  const indicators = carousel.querySelector(".hero-carousel-indicators");
  if (!track || !previous_button || !next_button || !indicators) return;

  const desktop_query = matchMedia("(min-width: 769px)");
  const extra_slides = [
    {
      src: "./home/hero-focus2.jpg",
      alt: "Profissional apresentando em um palco corporativo sob luzes neon em ambiente de alta demanda.",
    },
    {
      src: "./home/hero-focus3.jpg",
      alt: "Reunião executiva com líder apresentando decisão estratégica em ambiente de pressão.",
    },
  ];
  let slides = Array.from(track.querySelectorAll("[data-hero-slide]"));
  let buttons = [];
  let current_index = 0;
  let autoplay_timer = null;
  let hydration_task = null;
  let transition = null;
  let in_view = false;
  let hovering = carousel.matches(":hover");
  const interval = Number(carousel.dataset.autoplayInterval) || 5000;
  const fade_duration = 450;
  const can_run = () => desktop_query.matches && !document.hidden && in_view;
  const clear_autoplay = () => {
    clearTimeout(autoplay_timer);
    autoplay_timer = null;
  };
  const sync_slides = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current_index);
      slide.classList.remove("is-fading-out", "is-fading-in");
      slide.setAttribute("aria-hidden", String(index !== current_index));
    });
    buttons.forEach((button, index) => {
      const active = index === current_index;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
      if (active) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
  };
  const sync_autoplay = () => {
    clear_autoplay();
    if (!can_run() || hovering || carousel.contains(document.activeElement) || transition || slides.length < 2) return;
    autoplay_timer = setTimeout(() => go_to_slide(current_index + 1), interval);
  };
  const cancel_transition = () => {
    transition?.abort();
    transition = null;
    sync_slides();
  };
  const wait_for_fade = (signal) => new Promise((resolve, reject) => {
    const cancel = () => {
      clearTimeout(timer);
      reject(new DOMException("Cancelled", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal.removeEventListener("abort", cancel);
      resolve();
    }, fade_duration);
    signal.addEventListener("abort", cancel, { once: true });
  });
  const prepare_image = (image, signal) => new Promise((resolve) => {
    let finished = false;
    const finish = (ready) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      image.removeEventListener("load", loaded);
      image.removeEventListener("error", failed);
      signal.removeEventListener("abort", failed);
      resolve(ready && !signal.aborted);
    };
    const loaded = () => {
      if (image.decode) image.decode().then(() => finish(true), () => finish(false));
      else finish(image.naturalWidth > 0);
    };
    const failed = () => finish(false);
    const timeout = setTimeout(failed, 15000);
    image.addEventListener("load", loaded);
    image.addEventListener("error", failed);
    signal.addEventListener("abort", failed, { once: true });
    if (image.dataset.src) {
      image.src = image.dataset.src;
      delete image.dataset.src;
    }
    if (image.complete && image.getAttribute("src")) {
      if (image.naturalWidth) loaded();
      else failed();
    }
  });
  async function go_to_slide(next_index) {
    if (!can_run() || transition || slides.length < 2) return;
    const target_index = (next_index + slides.length) % slides.length;
    if (target_index === current_index) return;
    clear_autoplay();
    const controller = new AbortController();
    transition = controller;
    try {
      const target_slide = slides[target_index];
      if (!await prepare_image(target_slide.querySelector("img"), controller.signal) || controller.signal.aborted) return;
      slides[current_index].classList.add("is-fading-out");
      await wait_for_fade(controller.signal);
      if (controller.signal.aborted) return;
      current_index = target_index;
      sync_slides();
      target_slide.classList.add("is-fading-in");
      await wait_for_fade(controller.signal);
      target_slide.classList.remove("is-fading-in");
    } catch (error) {
      if (error.name !== "AbortError") console.error(error);
    } finally {
      if (transition === controller) {
        transition = null;
        sync_autoplay();
      }
    }
  }
  const hydrate = () => {
    hydration_task = null;
    if (!desktop_query.matches || carousel.dataset.hydrated === "true") return;
    extra_slides.forEach(({ src, alt }) => {
      const slide = document.createElement("div");
      slide.className = "hero-carousel-slide";
      slide.setAttribute("data-hero-slide", "");
      slide.setAttribute("aria-hidden", "true");
      const image = document.createElement("img");
      image.className = "media-block__image media-image--hero";
      image.dataset.src = src;
      image.alt = alt;
      image.width = 1439;
      image.height = 916;
      image.decoding = "async";
      slide.append(image);
      track.append(slide);
    });
    slides = Array.from(track.querySelectorAll("[data-hero-slide]"));
    buttons = slides.map((_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hero-carousel-indicator";
      button.setAttribute("aria-label", `Mostrar imagem ${index + 1} de ${slides.length}`);
      button.addEventListener("click", () => go_to_slide(index));
      return button;
    });
    indicators.replaceChildren(...buttons);
    carousel.dataset.hydrated = "true";
    previous_button.hidden = next_button.hidden = indicators.hidden = false;
    sync_slides();
    sync_autoplay();
  };
  const cancel_hydration = () => {
    if (hydration_task === null) return;
    if ("requestIdleCallback" in window) cancelIdleCallback(hydration_task);
    else clearTimeout(hydration_task);
    hydration_task = null;
  };
  const sync_context = () => {
    if (!can_run()) cancel_transition();
    if (!desktop_query.matches) cancel_hydration();
    else if (carousel.dataset.hydrated !== "true" && hydration_task === null) {
      hydration_task = "requestIdleCallback" in window
        ? requestIdleCallback(hydrate, { timeout: 1800 })
        : setTimeout(hydrate, 280);
    }
    sync_autoplay();
  };
  previous_button.addEventListener("click", () => go_to_slide(current_index - 1));
  next_button.addEventListener("click", () => go_to_slide(current_index + 1));
  carousel.addEventListener("mouseenter", () => { hovering = true; sync_autoplay(); });
  carousel.addEventListener("mouseleave", () => { hovering = false; sync_autoplay(); });
  carousel.addEventListener("focusin", clear_autoplay);
  carousel.addEventListener("focusout", () => queueMicrotask(sync_autoplay));
  document.addEventListener("visibilitychange", sync_context);
  desktop_query.addEventListener("change", sync_context);
  window.addEventListener("pagehide", () => {
    clear_autoplay();
    cancel_hydration();
    cancel_transition();
  });
  window.addEventListener("pageshow", sync_context);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      in_view = entry.isIntersecting;
      sync_context();
    }).observe(carousel);
  } else {
    in_view = true;
  }
  sync_context();
})();
