// color design tokens export
export const tokensDark = {
    grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#f4f2f4",
    200: "#e9e5e9",
    300: "#ded9dd",
    400: "#d3ccd2",
    500: "#c8bfc7",
    600: "#a0999f",
    700: "#787377",
    800: "#504c50",
    900: "#282628",
    1000: "#000000", // manually adjusted
    },
    primary: {
      // blue
    100: "#d6deea",
    200: "#aebdd5",
    300: "#859bbf",
    400: "#5d7aaa",
    500: "#345995",
    600: "#2a4777",
    700: "#1f3559",
    800: "#15243c",
    900: "#0a121e"
    },
    secondary: {
      // red
    50: "#f0f0f0", // manually adjusted
    100: "#f8d0d8",
    200: "#f1a1b1",
    300: "#ea728a",
    400: "#e34363",
    500: "#dc143c",
    600: "#b01030",
    700: "#840c24",
    800: "#580818",
    900: "#2c040c"
    },
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[500],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[300],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };