<script setup lang="ts">
import z from "zod";
import { useValidation, useI18n } from "#imports";

const { t } = useI18n();

const formSchema = z.object({
  email: z
    .string()
    .email()
    .nonempty({ message: t("errors.form.email") }),
  name: z.string().nonempty({ message: t("errors.form.name") }),
  website: z.string().optional(),
  content: z.string().nonempty({ message: t("errors.form.comment") }),
  commentOn: z.number(),
  parent: z.number().optional(),
});

type CommentFormProps = {
  email: string;
  name: string;
  website?: string;
  content: string;
  commentOn: number;
  parent?: number;
};

type ErrorProps = {
  email?: string[];
  name?: string[];
  content?: string[];
};

const { errors, validate } = useValidation<ErrorProps>(formSchema);

const { parent, postId } = defineProps<{
  parent?: number;
  postId: number;
}>();

const email = ref("");
const name = ref("");
const website = ref("");
const content = ref("");

const submitHandler = async () => {
  console.log(
    "submitHandler",
    email.value,
    name.value,
    website.value,
    content.value,
    postId,
    parent,
  );
  const commentForm: CommentFormProps = {
    email: email.value,
    name: name.value,
    website: website.value,
    content: content.value,
    commentOn: postId,
    parent: parent || 0,
  };

  validate<CommentFormProps>(commentForm);
  // console.log(commentForm);
  // const response = await mutate(commentForm);
  // console.log(response);
};
</script>

<template>
  <form class="mb-6" @submit.prevent="submitHandler">
    <div class="grid gap-3">
      <div class="grid">
        <label for="comment" class="sr-only">Your comment</label>
        <UiTextarea v-model="content" :error="errors && errors.content" />
      </div>
      <div class="grid lg:grid-cols-3 gap-3">
        <UiInput
          v-model="email"
          placeholder="Email"
          :error="errors && errors.email"
        />
        <UiInput
          v-model="name"
          placeholder="Name"
          :error="errors && errors.name"
        />
        <UiInput v-model="website" placeholder="Website" />
      </div>
      <div>
        <button
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
