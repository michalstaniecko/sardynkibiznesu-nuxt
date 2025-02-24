import type { ZodIssue, ZodSchema } from "zod";

export const useValidation = <E>(schemaObject: ZodSchema) => {
  const schema = schemaObject;

  const errors = shallowRef<E>();
  const success = shallowRef<boolean>();

  const isError = computed(
    () => errors.value && Object.keys(errors.value).length > 0,
  );

  const validate = <F>(form: F) => {
    const result = schema.safeParse(form);

    if (result.success) {
      success.value = true;
      errors.value = {} as E;
      return true;
    }

    const issues = result.error.issues;

    errors.value = issues.reduce((acc, issue: ZodIssue) => {
      const path = issue.path[0] as string;
      if ((acc as Record<string, string[]>)[path]) {
        (acc as Record<string, string[]>)[path].push(issue.message);
        return acc;
      }
      const _acc = {
        [path]: [issue.message],
      };
      return { ...acc, ..._acc };
    }, {} as E);

    return false;
  };
  return { validate, errors, success, isError };
};
