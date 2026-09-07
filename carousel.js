(() => {
  const carousel = document.querySelector("[data-product-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const previous_button = carousel.querySelector("[data-carousel-prev]");
  const next_button = carousel.querySelector("[data-carousel-next]");
  const indicators = carousel.querySelector("[data-carousel-indicators]");
  if (!track || !slides.length || !previous_button || !next_button || !indicators) return;

  const focusable_items = slides.map((slide) => Array.from(
    slide.querySelectorAll("a, button, input, select, textarea, [tabindex]"),
    (element) => ({ element, tabindex: element.getAttribute("tabindex") }),
  ));
  let current_index = 0;
  let visible_count = 1;
  let step_size = 0;
  let sync_frame = null;
  let indicator_buttons = [];
  const get_max_index = () => Math.max(0, slides.length - visible_count);

  const sync_carousel = () => {
    const max_index = get_max_index();
    current_index = Math.min(Math.max(current_index, 0), max_index);
    track.style.transform = `translateX(${-current_index * step_size}px)`;
    previous_button.disabled = next_button.disabled = max_index === 0;
    if (indicator_buttons.length !== max_index + 1) {
      indicator_buttons = Array.from({ length: max_index + 1 }, (_, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "carousel-indicator";
        button.setAttribute("aria-label", `Mostrar produtos a partir do item ${index + 1}`);
        button.addEventListener("click", () => {
          current_index = index;
          sync_carousel();
        });
        return button;
      });
      indicators.replaceChildren(...indicator_buttons);
    }
    slides.forEach((slide, index) => {
      const is_visible = index >= current_index && index < current_index + visible_count;
      slide.setAttribute("aria-hidden", String(!is_visible));
      focusable_items[index].forEach(({ element, tabindex }) => {
        if (!is_visible) element.setAttribute("tabindex", "-1");
        else if (tabindex === null) element.removeAttribute("tabindex");
        else element.setAttribute("tabindex", tabindex);
      });
    });
    indicator_buttons.forEach((button, index) => {
      const active = index === current_index;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", String(active));
    });
  };
  const measure_carousel = () => {
    sync_frame = null;
    const count = Number.parseInt(getComputedStyle(carousel).getPropertyValue("--carousel-visible"), 10);
    visible_count = Number.isFinite(count) && count > 0 ? count : 1;
    step_size = slides.length > 1
      ? slides[1].getBoundingClientRect().left - slides[0].getBoundingClientRect().left
      : 0;
    sync_carousel();
  };
  const schedule_measurement = () => {
    if (sync_frame === null) sync_frame = requestAnimationFrame(measure_carousel);
  };
  previous_button.addEventListener("click", () => {
    current_index = current_index === 0 ? get_max_index() : current_index - 1;
    sync_carousel();
  });
  next_button.addEventListener("click", () => {
    current_index = current_index === get_max_index() ? 0 : current_index + 1;
    sync_carousel();
  });
  if ("ResizeObserver" in window) new ResizeObserver(schedule_measurement).observe(carousel);
  else window.addEventListener("resize", schedule_measurement);
  measure_carousel();
})();
