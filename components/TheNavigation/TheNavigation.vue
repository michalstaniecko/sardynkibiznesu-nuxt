<script setup lang="ts">
import type { MenuProps } from "~/@types/menu";
import { useSettingsStore } from "~/stores/settings";
import { Collapse, initCollapses } from "flowbite";

const { settings } = useSettingsStore();

const button = ref();
const menu = ref();

const query = gql`
  query getMenu {
    menuItems(first: 999, where: { location: PRIMARY_MENU }) {
      nodes {
        id
        label
        path
        parentId
        uri
        target
      }
    }
  }
`;

const flatListToHierarchical = (
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {},
): MenuProps[] => {
  const tree = [];
  const childrenOf = {};
  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};

const variables = {};

const { data, error, status } = await useAsyncQuery(
  { query, variables },
  {
    transform: (data) => flatListToHierarchical(data.menuItems.nodes),
  },
);

onMounted(() => {
  useFlowbite(() => {
    const collapse = new Collapse(menu.value, button.value);

    const menuItems = menu.value.querySelectorAll("a");

    if (menuItems) {
      menuItems.forEach((item) => {
        item.addEventListener("click", () => {
          collapse.collapse();
        });
      });
    }
  });
});
</script>

<template>
  <div class="bg-white">
    <div class="max-w-screen-xxl mx-auto">
      <header>
        <nav
          class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
        >
          <div class="flex flex-wrap justify-between items-center">
            <NuxtLink to="/" class="flex items-center">
              <img
                :src="settings.logo"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </NuxtLink>
            <div class="flex items-center lg:order-2">
              <button
                ref="button"
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              id="mobile-menu-2"
              ref="menu"
              class="navigation hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:ml-auto"
            >
              <TheNavigationList v-if="data" :data="data" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<style scoped></style>
