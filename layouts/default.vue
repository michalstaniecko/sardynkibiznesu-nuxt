<script setup lang="ts"></script>

<template>
  <div>
    <TheHeader />
    <div class="grid lg:grid-cols-4 gap-8 max-w-screen-xxl mx-auto px-5 py-10">
      <div class="col-span-3">
        <slot />
      </div>
      <div class="col-span-1">
        <TheSidebar />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
