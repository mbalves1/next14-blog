// const { cookies } = require("next/headers")

const useServerDarkMode = (defaultTheme = "dark") => {
  // return cookies().get("theme").value ?? defaultTheme;
  return defaultTheme
};

export default useServerDarkMode;