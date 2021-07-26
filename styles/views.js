import { StyleSheet } from "react-native";

export const Views = StyleSheet.create({
  FormArea: {
    width: "90%",
  },

  Division: {
    height: 1,
    width: "100%",
    backgroundColor: "#9CA3AF",
    marginVertical: 10,
  },

  ExtraView: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  DashboardTitleView: {
    flex: 1,
  },

  DashboardProductView: {
    flexDirection: "row",
    height: 50,
  },

  DashboardSecondView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
