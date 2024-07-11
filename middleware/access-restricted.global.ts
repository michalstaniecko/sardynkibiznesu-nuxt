export default defineNuxtRouteMiddleware(async (to) => {
  const nuxtApp = useNuxtApp();

  if (
    import.meta.client &&
    nuxtApp.isHydrating &&
    nuxtApp.payload.serverRendered
  )
    return;
  const config = useRuntimeConfig();
  const hasAccess = useCookie<number>("hasAccess");
  const accessRestrictedCookie = useCookie("accessRestricted");
  if (import.meta.server) {
    accessRestrictedCookie.value = config.accessRestricted === true ? "1" : "0";
  }
  const isAccessRestricted =
    config.accessRestricted === true ||
    accessRestrictedCookie.value?.toString() === "1";

  if (hasAccess.value === 1 && to.path !== "/auth") return;

  if (hasAccess.value === 1 && to.path === "/auth") return navigateTo("/");

  if (isAccessRestricted && to.path !== "/auth") return navigateTo("/auth");

  if (!isAccessRestricted && to.path === "/auth") return navigateTo("/");
});
