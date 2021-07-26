import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StackRouter } from "react-navigation";

import Dashboard from "./pages/Dashboard";
import DashboardProduct from "./pages/DashboardProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

//Administrator
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDashboardProduct from "./pages/admin/AdminDashboardProduct";
import AdminLogin from "./pages/admin/AdminLogin";
import CreateEstablishment from "./pages/admin/CreateEstablishment";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Enter to your Account" }}
        />
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
          options={{ title: "Check the Menu Administrator" }}
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
          component={AdminLogin}
          options={{ title: "Enter to your Administrator Account" }}
        />
        <Stack.Screen
          name="CreateEstablishment"
          component={CreateEstablishment}
          options={{ title: "Create your own Establishment" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
