const carousel = document.querySelector("[data-product-carousel]");

if (carousel) {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const previous_button = carousel.querySelector("[data-carousel-prev]");
  const next_button = carousel.querySelector("[data-carousel-next]");
  const indicators = carousel.querySelector("[data-carousel-indicators]");

  let current_index = 0;

  const get_visible_count = () => {
    const raw_value = window.getComputedStyle(carousel).getPropertyValue("--carousel-visible");
    const visible_count = Number.parseInt(raw_value, 10);

    return Number.isFinite(visible_count) && visible_count > 0 ? visible_count : 1;
  };

  const get_max_index = () => Math.max(0, slides.length - get_visible_count());

  const get_step_size = () => {
    if (slides.length < 2) {
      return 0;
    }

    const first_slide = slides[0].getBoundingClientRect();
    const second_slide = slides[1].getBoundingClientRect();

    return second_slide.left - first_slide.left;
  };

  const build_indicators = () => {
    indicators.innerHTML = "";

    for (let index = 0; index <= get_max_index(); index += 1) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "carousel-indicator";
      button.setAttribute("aria-label", `Mostrar produtos a partir do item ${index + 1}`);
      button.addEventListener("click", () => {
        current_index = index;
        sync_carousel();
      });

      indicators.append(button);
    }
  };

  const sync_slides = () => {
    const visible_count = get_visible_count();

    slides.forEach((slide, index) => {
      const is_visible = index >= current_index && index < current_index + visible_count;

      slide.setAttribute("aria-hidden", String(!is_visible));
    });
  };

  const sync_indicators = () => {
    Array.from(indicators.children).forEach((button, index) => {
      const is_active = index === current_index;

      button.classList.toggle("is-active", is_active);
      button.setAttribute("aria-current", is_active ? "true" : "false");
    });
  };

  function sync_carousel() {
    const max_index = get_max_index();

    current_index = Math.min(Math.max(current_index, 0), max_index);
    track.style.transform = `translateX(${-current_index * get_step_size()}px)`;

    const has_multiple_groups = max_index > 0;
    previous_button.disabled = !has_multiple_groups;
    next_button.disabled = !has_multiple_groups;

    if (indicators.children.length !== max_index + 1) {
      build_indicators();
    }

    sync_slides();
    sync_indicators();
  }

  previous_button.addEventListener("click", () => {
    const max_index = get_max_index();

    current_index = current_index === 0 ? max_index : current_index - 1;
    sync_carousel();
  });

  next_button.addEventListener("click", () => {
    const max_index = get_max_index();

    current_index = current_index === max_index ? 0 : current_index + 1;
    sync_carousel();
  });

  window.addEventListener("resize", sync_carousel);
  window.addEventListener("load", sync_carousel);

  build_indicators();
  sync_carousel();
}
