<script setup lang="ts">
import z from "zod";
import { useValidation, useI18n } from "#imports";
import { CommentRequestBodyKeys } from "~/@types/comment";

const { parent, postId } = defineProps<{
  parent?: number;
  postId: number;
}>();

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

const email = ref("");
const name = ref("");
const website = ref("");
const content = ref("");

const body = computed(() => ({
  [CommentRequestBodyKeys.email]: email.value,
  [CommentRequestBodyKeys.name]: name.value,
  [CommentRequestBodyKeys.post]: postId,
  [CommentRequestBodyKeys.content]: content.value,
  [CommentRequestBodyKeys.parent]: parent || 0,
}));

const { errors, validate } = useValidation<ErrorProps>(formSchema);

const { status, error, execute, data } = useFetch("/api/comment", {
  immediate: false,
  watch: false,
  method: "POST",
  body,
});

const submitHandler = async () => {
  const commentForm: CommentFormProps = {
    email: email.value,
    name: name.value,
    website: website.value,
    content: content.value,
    commentOn: postId,
    parent: parent || 0,
  };

  const validation = validate<CommentFormProps>(commentForm);

  if (!validation) {
    return;
  }

  execute();
};

watchEffect(() => {
  if (status.value === "success") {
    email.value = "";
    name.value = "";
    website.value = "";
    content.value = "";
  }
});
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
          :disabled="status === 'pending'"
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white disabled:bg-primary-100 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </div>
      <div
        v-if="status === 'error' && error"
        class="text-sm text-red-500 font-medium"
      >
        {{ t(`errors.${error?.statusMessage}`) }}
        {{ error }}<br />
        {{ data }}
      </div>
      <div
        v-if="status === 'success'"
        class="text-sm text-green-500 font-medium"
      >
        {{ t("comment.success") }}
      </div>
    </div>
  </form>
</template>

<style scoped></style>
