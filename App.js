import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StackRouter } from "react-navigation";

import Dashboard from "./pages/Dashboard";
import DashboardProduct from "./pages/DashboardProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboardProduct from "./pages/AdminDashboardProduct";
import AdminLogin from "./pages/AdminLogin";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{ title: "Welcome Administrator" }}
        />
        <Stack.Screen
          name="AdminDashboardProduct"
          component={AdminDashboardProduct}
          options={{ title: "Check the Menu" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Enter to your Account" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Join Uber Eats" }}
        />
        <Stack.Screen
          name="DashboardProduct"
          component={DashboardProduct}
          options={{ title: "Check the Menu" }}
        />
        <Stack.Screen
          name="AdminLogin"
          component={(name = "AdminLogin")}
          options={{ title: "Enter to your Administrator Account" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
