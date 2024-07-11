<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

const password = ref("");
const pending = ref(false);

const errorMessage = ref<string | null>();

const handleLogin = async () => {
  pending.value = true;
  errorMessage.value = null;
  const data = await $fetch<boolean>("/api/auth", {
    method: "POST",
    body: JSON.stringify({ password: password.value }),
  });
  if (data) {
    return navigateTo("/");
  }
  errorMessage.value = "Invalid password";
  pending.value = false;
};
</script>

<template>
  <div class="min-w-full min-h-[100vh] flex items-center justify-center p-10">
    <div
      class="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="space-y-6" action="#" @submit.prevent="handleLogin">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>

        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
          :disabled="pending"
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
