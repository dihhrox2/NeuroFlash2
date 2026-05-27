const faq_items = Array.from(document.querySelectorAll(".faq-item"))
  .map((item, index) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!button || !answer) {
      return null;
    }

    const answer_id = answer.id || `faq-answer-${index + 1}`;

    answer.id = answer_id;
    button.setAttribute("aria-controls", answer_id);

    return { item, button, answer };
  })
  .filter(Boolean);

let sync_frame = null;
const mobile_faq_query = window.matchMedia("(max-width: 768px)");

const set_item_open_state = (faq_item, is_open) => {
  faq_item.item.classList.toggle("is-open", is_open);
  faq_item.button.setAttribute("aria-expanded", String(is_open));
  faq_item.answer.setAttribute("aria-hidden", String(!is_open));
  faq_item.answer.style.maxHeight = is_open && !mobile_faq_query.matches ? `${faq_item.answer.scrollHeight}px` : "0px";

  if (is_open && mobile_faq_query.matches) {
    faq_item.answer.style.maxHeight = "none";
  }
};

const close_other_items = (active_item) => {
  faq_items.forEach((faq_item) => {
    if (faq_item !== active_item) {
      set_item_open_state(faq_item, false);
    }
  });
};

const sync_faq_heights = () => {
  faq_items.forEach((faq_item) => {
    set_item_open_state(faq_item, faq_item.item.classList.contains("is-open"));
  });
};

const schedule_faq_sync = () => {
  if (sync_frame !== null) {
    return;
  }

  sync_frame = window.requestAnimationFrame(() => {
    sync_frame = null;
    sync_faq_heights();
  });
};

faq_items.forEach((faq_item) => {
  set_item_open_state(faq_item, faq_item.item.classList.contains("is-open"));

  faq_item.button.addEventListener("click", () => {
    const should_open = !faq_item.item.classList.contains("is-open");

    close_other_items(faq_item);
    set_item_open_state(faq_item, should_open);
  });
});

window.addEventListener("load", schedule_faq_sync);
window.addEventListener("resize", schedule_faq_sync);
mobile_faq_query.addEventListener("change", sync_faq_heights);
