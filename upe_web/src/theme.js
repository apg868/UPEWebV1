import { extendTheme } from '@chakra-ui/react';

const themeProv = extendTheme({
  fonts: {
    main: "'Roboto', sans-serif",
    secondary: "'Jost', sans-serif",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primaryRed: "rgb(255, 68, 68)",
    secondaryRed: "rgb(37, 150, 190)",
    primaryGray: "rgb(218, 218, 218)",
    secondaryGray: "rgb(219,219,219)"
  }
});

export default themeProv;
