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
    bottom: 534,
    right: 20,
  },

  SignIn: {
    left: 270,
    bottom: 485,
  },

  LogOutButton: {
    borderRadius: 5,
    height: 60,
    width: "100%",
    backgroundColor: "lightseagreen",
    bottom: "100%",
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
  },
});
