export const colors = {
  black: "#000",
  mattBlack: "#282828",
  white: "#ffffff",
  hotPink: "#FF5198",
  palePink: "#FFDEF4",
  blackOverlay: "rgba(16, 16, 16, 0.29)",
  fadedWhite: "rgba(255, 255, 255, 0.6)",
};

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  // desktop: "1200px",
};

export const devices = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  // desktop: `(min-width: ${breakpoints.desktop})`,
};