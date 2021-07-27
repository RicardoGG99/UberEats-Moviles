import { StyleSheet } from "react-native";

export const ButtonStyles = StyleSheet.create({
  NewButton: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 15,
    height: 60,
  },

  NewButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  SignOut: {
    bottom: 634,
    left: 450,
  },

  SignIn: {
    left: 1270,
    bottom: 585,
    zIndex: 10000,
  },

  LogOutButton: {
    borderRadius: 5,
    height: 60,
    width: "100%",
    backgroundColor: "lightseagreen",
    bottom: "100%",
  },

  LoggOutButton: {
    left: 0,
    top: 0,
  },

  SignButton: {
    padding: 15,
    backgroundColor: "#40953B",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },

  SignButtonText: {
    color: "#EAE9DD",
    fontSize: 16,
    textAlign: "center",
  },

  Selector: {
    textAlign: "center",
    height: 100,
  },

  TaskInput: {
    paddingBottom: 5,
    width: 700,
  },

  DashboardProductButton: {
    marginBottom: 20,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
