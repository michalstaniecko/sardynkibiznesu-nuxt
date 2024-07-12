<script setup lang="ts">
import commentMutation from "~/queries/commentMutation";

type CommentFormProps = {
  email: string;
  name: string;
  website?: string;
  content: string;
  commentOn: number;
  parent?: number;
};
const { parent } = defineProps<{
  parent?: number;
}>();

const email = ref("");
const name = ref("");
const website = ref("");
const content = ref("");

const postId = inject<number>("postId")!;

const { mutate, loading } = useMutation(commentMutation);

const submitHandler = async () => {
  const commentForm: CommentFormProps = {
    email: email.value,
    name: name.value,
    website: website.value,
    content: content.value,
    commentOn: postId,
    parent: parent || 0,
  };
  console.log(commentForm);
  const response = await mutate(commentForm);
  console.log(response);
};
</script>

<template>
  <form class="mb-6" @submit.prevent="submitHandler">
    <div class="grid gap-3">
      <div class="grid">
        <label for="comment" class="sr-only">Your comment</label>
        <UiTextarea v-model="content" />
      </div>
      <div class="grid lg:grid-cols-3 gap-3">
        <UiInput v-model="email" placeholder="Email" />
        <UiInput v-model="name" placeholder="Name" />
        <UiInput v-model="website" placeholder="Website" />
      </div>
      <div>
        <button
          :disabled="loading"
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white disabled:bg-primary-100 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
