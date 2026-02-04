/**
 * Color Palette for Refund Front V2
 * Uses: Verde Neon (#61eb1b), Negro (#000000), Gris Oscuro (#1a1a1a)
 */

export const colors = {
  // Primary - Verde Neon
  primary: {
    main: "#61eb1b",
    light: "rgba(97, 235, 27, 0.15)",
    lighter: "rgba(97, 235, 27, 0.08)",
    dark: "#50c515",
  },

  // Dark backgrounds
  dark: {
    main: "#000000",
    bg: "#0f0f0f",
    bgSecondary: "#121212",
    bgTertiary: "#181818",
    border: "#1a1a1a",
  },

  // Neutral / Gray
  gray: {
    darkest: "#0b0f0a",
    darker: "#1a1a1a",
    dark: "#2a2a2a",
    medium: "#404040",
    light: "#e5f7ff",
  },

  // Text colors
  text: {
    primary: "#ffffff",
    secondary: "#e5f7ff",
    muted: "#a0a0a0",
  },

  // Status colors
  status: {
    error: "#d32f2f",
    errorRed: "#ce0000",
    success: "#61eb1b",
    warning: "#ff9800",
    info: "#2196f3",
  },

  // Scrollbar
  scrollbar: {
    track: "#2a2a2a",
    thumb: "#404040",
    thumbHover: "#505050",
  },
};

// CSS Variables for global use
export const cssVariables = `
  --primary-color: ${colors.primary.main};
  --primary-color-light: ${colors.primary.light};
  --primary-color-lighter: ${colors.primary.lighter};
  --primary-color-dark: ${colors.primary.dark};
  
  --dark-main: ${colors.dark.main};
  --dark-bg: ${colors.dark.bg};
  --dark-bg-secondary: ${colors.dark.bgSecondary};
  --dark-bg-tertiary: ${colors.dark.bgTertiary};
  --dark-border: ${colors.dark.border};
  
  --gray-darkest: ${colors.gray.darkest};
  --gray-darker: ${colors.gray.darker};
  --gray-dark: ${colors.gray.dark};
  --gray-medium: ${colors.gray.medium};
  --gray-light: ${colors.gray.light};
  
  --text-primary: ${colors.text.primary};
  --text-secondary: ${colors.text.secondary};
  --text-muted: ${colors.text.muted};
  
  --error-color: ${colors.status.error};
  --error-red: ${colors.status.errorRed};
  --success-color: ${colors.status.success};
  --warning-color: ${colors.status.warning};
  --info-color: ${colors.status.info};
  
  --scrollbar-track: ${colors.scrollbar.track};
  --scrollbar-thumb: ${colors.scrollbar.thumb};
  --scrollbar-thumb-hover: ${colors.scrollbar.thumbHover};
`;
