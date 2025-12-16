import { StyleSheet } from "react-native";

export const GRADIENT_COLORS = [
  "#D6AAF1",
  "#B1FBD9",
  "#E6F8AA",
  "#E6F7AB",
  "#C3FBCC",
  "#B4FAE0",
  "#57D2EC",
  "#82B4FD",
] as const;

export const GRADIENT_LOCATIONS = [
  0.01, 0.16, 0.27, 0.33, 0.47, 0.78, 0.88, 0.99,
] as const;

export const styles = StyleSheet.create({
  primary: {
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  border: {
    padding: 2, // độ dày viền gradient
    borderRadius: 16,
  },

  secondaryInner: {
    height: 52,
    backgroundColor: "#000000",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 8,
  },

  textPrimary: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },

  textSecondary: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
