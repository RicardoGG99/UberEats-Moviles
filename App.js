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
import CreateProduct from "./pages/admin/CreateProduct";
import UpdateEstablishment from "./pages/admin/UpdateEstablishment";
import UpdateProduct from "./pages/admin/UpdateProduct";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{ title: "Welcome Administrator" }}
        />
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
        <Stack.Screen
          name="CreateProduct"
          component={CreateProduct}
          options={{ title: "Create your own Product" }}
        />
        <Stack.Screen
          name="UpdateEstablishment"
          component={UpdateEstablishment}
          options={{ title: "Update Establishment" }}
        />
        <Stack.Screen
          name="UpdateProduct"
          component={UpdateProduct}
          options={{ title: "Update Product" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
