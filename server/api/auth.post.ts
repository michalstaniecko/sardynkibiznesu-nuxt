export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody<{
    password: string;
  }>(event);
  console.log(body);
  // const isValid =
  //   body.password.toString() === config.accessRestrictedPassword.toString();
  // if (isValid) {
  //   setCookie(event, "hasAccess", "1");
  // }
  // return isValid;
});
