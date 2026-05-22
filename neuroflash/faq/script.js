const faqItems = Array.from(document.querySelectorAll(".faq-item"))
  .map((item, index) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!button || !answer) {
      return null;
    }

    const answerId = answer.id || `faq-answer-${index + 1}`;

    answer.id = answerId;
    button.setAttribute("aria-controls", answerId);

    return { item, button, answer };
  })
  .filter(Boolean);

let syncFrame = null;
const mobileFaqQuery = window.matchMedia("(max-width: 768px)");

const setItemOpenState = (faqItem, isOpen) => {
  faqItem.item.classList.toggle("is-open", isOpen);
  faqItem.button.setAttribute("aria-expanded", String(isOpen));
  faqItem.answer.setAttribute("aria-hidden", String(!isOpen));
  faqItem.answer.style.maxHeight = isOpen && !mobileFaqQuery.matches ? `${faqItem.answer.scrollHeight}px` : "0px";

  if (isOpen && mobileFaqQuery.matches) {
    faqItem.answer.style.maxHeight = "none";
  }
};

const closeOtherItems = (activeItem) => {
  faqItems.forEach((faqItem) => {
    if (faqItem !== activeItem) {
      setItemOpenState(faqItem, false);
    }
  });
};

const syncFaqHeights = () => {
  faqItems.forEach((faqItem) => {
    setItemOpenState(faqItem, faqItem.item.classList.contains("is-open"));
  });
};

const scheduleFaqSync = () => {
  if (syncFrame !== null) {
    return;
  }

  syncFrame = window.requestAnimationFrame(() => {
    syncFrame = null;
    syncFaqHeights();
  });
};

faqItems.forEach((faqItem) => {
  setItemOpenState(faqItem, faqItem.item.classList.contains("is-open"));

  faqItem.button.addEventListener("click", () => {
    const shouldOpen = !faqItem.item.classList.contains("is-open");

    closeOtherItems(faqItem);
    setItemOpenState(faqItem, shouldOpen);
  });
});

window.addEventListener("load", scheduleFaqSync);
window.addEventListener("resize", scheduleFaqSync);
mobileFaqQuery.addEventListener("change", syncFaqHeights);
