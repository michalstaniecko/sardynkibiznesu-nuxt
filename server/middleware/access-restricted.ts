export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);

  const accessRestricted = config.accessRestricted;

  setCookie(event, "accessRestricted", accessRestricted ? "1" : "0");
});
