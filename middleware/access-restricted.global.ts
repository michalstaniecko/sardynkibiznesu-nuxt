export default defineNuxtRouteMiddleware(async (to) => {
  const hasAccess = useCookie<number>("hasAccess");
  const accessRestrictedCookie = useCookie("accessRestricted");

  console.log(hasAccess.value, accessRestrictedCookie.value);
  if (import.meta.client) {
    if (hasAccess.value === 1) {
      if (to.path === "/auth") return navigateTo("/");
      return;
    }

    if (accessRestrictedCookie.value?.toString() === "1") {
      if (to.path !== "/auth") return navigateTo("/auth");
      return;
    }
    return;
  }
  // if (import.meta.server) {
  //   accessRestrictedCookie.value = config.accessRestricted === true ? "1" : "0";
  // }
  // const isAccessRestricted =
  //   config.accessRestricted === true ||
  //   accessRestrictedCookie.value?.toString() === "1";
  //
  // if (hasAccess.value === 1 && to.path !== "/auth") return;
  //
  // if (hasAccess.value === 1 && to.path === "/auth") return navigateTo("/");
  //
  // if (isAccessRestricted && to.path !== "/auth") return navigateTo("/auth");
  //
  // if (!isAccessRestricted && to.path === "/auth") return navigateTo("/");
});
