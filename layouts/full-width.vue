<script setup lang="ts"></script>

<template>
  <div>
    <TheHeader />
    <div class="grid lg:grid-cols-6 gap-8 max-w-screen-xxl mx-auto p-5">
      <div class="col-start-2 col-span-4">
        <slot />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
