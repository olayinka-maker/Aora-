// styles.js or theme.js
import { StyleSheet } from "react-native";

// Centralize colors
export const colors = {
  primary: "#161622",
  secondary: {
    DEFAULT: "#FF9C01",
    100: "#FF9001",
    200: "#FF8E01",
  },
  black: {
    DEFAULT: "#000",
    100: "#1E1E2D",
    200: "#232533",
  },
  gray: {
    100: "#CDCDE0",
  },
};

// Centralize fonts
export const fonts = {
  pthin: "Poppins-Thin",
  pextralight: "Poppins-ExtraLight",
  plight: "Poppins-Light",
  pregular: "Poppins-Regular",
  pmedium: "Poppins-Medium",
  psemibold: "Poppins-SemiBold",
  pbold: "Poppins-Bold",
  pextrabold: "Poppins-ExtraBold",
  pblack: "Poppins-Black",
};

// Create a global StyleSheet if needed
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.pregular,
    color: colors.secondary.DEFAULT,
    fontSize: 16,
  },
});
