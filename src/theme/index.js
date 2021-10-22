function theme(mode) {
  const fontConfig = {
    body: ["Inter", "sans-serif"].join(","),
    heading: ["Inter", "sans-serif"].join(","),
    sizeSmall: "14px",
    sizeBody: "16px",
    sizeMedium: "20px",
    sizeHeading: "25px",
    sizeBig: "45px",
  };

  const colorsLight = {
    primary: "#007bdf",
    primaryAlt: "#006dc6",
    secondary: "#fba905",
    secondaryAlt: "#f1a000",
    dark: "#272a2e",
    background: "#fff",
    gray: "#eee",
    text: "#262628",
    textAlt: "#5c5e60",
    border: "#ddd",
  };

  const colorsDark = {
    primary: "#007bdf",
    primaryAlt: "#006dc6",
    secondary: "#fba905",
    secondaryAlt: "#f1a000",
    dark: "#272a2e",
    background: "#333",
    gray: "#222",
    text: "#fff",
    textAlt: "#aaa",
    border: "#555",
  };

  return {
    colors: mode === "light" ? colorsLight : colorsDark,
    font: fontConfig,
  };
}

export default theme;
