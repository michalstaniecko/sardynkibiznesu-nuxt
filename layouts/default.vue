<script setup lang="ts"></script>

<template>
  <div>
    <TheHeader />
    <div class="layout layout-default">
      <div class="layout__content">
        <slot />
      </div>
      <div class="layout__sidebar">
        <TheSidebar />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
