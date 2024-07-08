import { Collapse } from "flowbite";

export default defineNuxtPlugin({
  hooks: {
    "page:loading:end"() {
      const triggers = document.querySelectorAll("[data-collapse-toggle]");
      triggers.forEach((trigger) => {
        const target = document.getElementById(
          (trigger as HTMLElement)!.dataset!.collapseToggle!,
        );
        new Collapse(target, trigger as HTMLElement);
      });
    },
  },
});
