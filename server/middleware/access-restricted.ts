// export default defineEventHandler((event) => {
//   if (event.path.startsWith("/_ipx")) return;
//   if (event.path.startsWith("/_vercel")) return;
//
//   const config = useRuntimeConfig(event);
//
//   const accessRestricted = config.accessRestricted;
//
//   setCookie(event, "accessRestricted", accessRestricted ? "1" : "0");
// });
