<script setup lang="ts"></script>

<template>
  <div>
    <TheHeader />
    <div class="layout-default layout-default--no-breadcrumb">
      <div class="">
        <slot />
      </div>
      <div class="">
        <TheSidebar />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
