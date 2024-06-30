<script setup lang="ts">
defineProps<{
  links: {
    to: string;
    label: string;
  }[];
}>();
</script>

<template>
  <div class="max-w-screen-xxl mx-auto p-5">
    <div class="container-fluid container-fluid-stop">
      <div class="breadcrumbs__wrapper">
        <span
          ><span><a href="https://sardynkibiznesu.pl/">Strona główna</a></span>
          »
          <span class="breadcrumb_last" aria-current="page"
            >Tu zacznij</span
          ></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
