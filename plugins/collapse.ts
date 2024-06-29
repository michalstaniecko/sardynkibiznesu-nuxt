import { Collapse } from "flowbite";

export default defineNuxtPlugin({
  hooks: {
    "app:mounted"() {
      const triggers = document.querySelectorAll("[data-collapse-toggle]");
      triggers.forEach((trigger) => {
        const target = document.getElementById(trigger.dataset.collapseToggle);
        new Collapse(target, trigger);
      });
    },
  },
});
