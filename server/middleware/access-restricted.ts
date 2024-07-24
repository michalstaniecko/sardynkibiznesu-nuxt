export default defineEventHandler(async (event) => {
  if (event.path.startsWith("/_ipx")) return;

  const config = useRuntimeConfig(event);
  const requestURL = getRequestURL(event);

  const accessRestricted = config.accessRestricted;

  if (requestURL.searchParams.get("pagespeed") === "1") {
    deleteCookie(event, "accessRestricted");
    return;
  }

  setCookie(event, "accessRestricted", accessRestricted ? "1" : "0");
});
