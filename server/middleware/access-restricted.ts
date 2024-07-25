export default defineEventHandler((event) => {
  if (event.path.startsWith("/_ipx")) return;

  const config = useRuntimeConfig(event);

  const accessRestricted = config.accessRestricted;

  setCookie(event, "accessRestricted", accessRestricted ? "1" : "0");
});
