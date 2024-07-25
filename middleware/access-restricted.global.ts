export default defineNuxtRouteMiddleware((to) => {
/*  const hasAccess = useCookie("hasAccess");
  const accessRestricted = useCookie<number>("accessRestricted");

  if (to.query.pagespeed === "1") {
    accessRestricted.value = 0;
  }

  const hasAccessOrNotRestricted = hasAccess.value || accessRestricted.value !== 1;

  const isClient = import.meta.client;
  const isServer = import.meta.server;

  if (isClient) {
    if (!hasAccessOrNotRestricted && to.path !== "/auth") {
      return abortNavigation();
    }
  }

  if (isServer) {
    if (!hasAccessOrNotRestricted && to.path !== "/auth") {
      return navigateTo("/auth");
    }

    if (hasAccessOrNotRestricted && to.path === '/auth') {
      return abortNavigation();
    }
  }*/
})
