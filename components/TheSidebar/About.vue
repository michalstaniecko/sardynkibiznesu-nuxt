<script lang="ts" setup></script>

<template>
  <div
    class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <NuxtImg
      src="https://sardynkibiznesu.pl/wp-content/uploads/2019/01/radek-kwadrat.jpg"
      width="72"
      height="72"
      format="webp"
      class="float-right ml-2 mb-2"
    />
    <p
      class="font-normal text-sm md:text-xs xl:text-sm text-gray-700 dark:text-gray-400"
    >
      {{ $t("sidebar.about.text") }}
    </p>
    <RouterLink
      :to="$t('sidebar.about.url')"
      class="inline-flex font-semibold text-xs items-center text-primary-600 hover:underline"
    >
      {{ $t("readMore") }}
      <svg
        class="w-2.5 h-2.5 ms-2 rtl:rotate-[270deg]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
        />
      </svg>
    </RouterLink>
  </div>
</template>
