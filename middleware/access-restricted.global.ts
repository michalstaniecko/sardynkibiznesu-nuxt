export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.client) return;

  const hasAccess = useCookie<number>("hasAccess");
  const accessRestrictedCookie = useCookie("accessRestricted");

  // console.log("server", import.meta.server);
  // console.log("client", import.meta.client);
  // console.log("hasAccess", hasAccess.value);
  // console.log("accessRestrictedCookie", typeof accessRestrictedCookie.value);
  // console.log("to", to.path);

  if (import.meta.server) {
    if (hasAccess.value === 1 && to.path !== "/auth") {
      return;
    }

    if (hasAccess.value === 1 && to.path === "/auth") {
      return navigateTo("/");
    }

    if (accessRestrictedCookie.value === 1 && to.path !== "/auth") {
      return navigateTo("/auth");
    }

    if (accessRestrictedCookie.value === 0 && to.path === "/auth") {
      return navigateTo("/");
    }

    return;
  }
});
