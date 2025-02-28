<script setup lang="ts">
const isOpen = ref(false);
const navRef = ref();
const handleClick = () => {
  isOpen.value = !isOpen.value;
};
onMounted(() => {
  document.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!navRef.value.contains(event.target)) {
      isOpen.value = false;
    }
  });
});
</script>

<template>
  <nav
    ref="navRef"
    class="sticky top-0 shadow-md bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div class="flex items-center justify-between mx-auto p-4">
      <slot name="logo" />
      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
        @click="handleClick"
      >
        <span class="sr-only">Open main menu</span>
        <TheNavigationHamburger />
      </button>

      <div
        id="navbar-multi-level"
        :class="{ hidden: !isOpen }"
        class="max-xl:shadow-md max-xl:absolute max-xl:left-0 max-xl:top-full w-full xl:block xl:w-auto"
      >
        <slot name="menulist" />
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
