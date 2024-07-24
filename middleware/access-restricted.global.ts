export default defineNuxtRouteMiddleware((to, from) => {
  const hasAccess = useCookie("hasAccess");
  const accessRestricted = useCookie<number>("accessRestricted");

  const hasAccessOrNotRestricted = hasAccess.value || accessRestricted.value !== 1;

  if (!hasAccessOrNotRestricted && to.path !== "/auth") {
    return navigateTo("/auth");
  }

  if (hasAccessOrNotRestricted && to.path === '/auth') {
    return abortNavigation();
  }
})
