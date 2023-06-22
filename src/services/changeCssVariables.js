export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  root.style.setProperty(
    "--theme-default-header",
    `var(--theme-${theme}-header)`
  );
  root.style.setProperty("--color-violet", `var(--color-${theme})`);
};

// --theme-green-header: green;
// --theme-red-header: red;
// --theme-blue-header: blue;
