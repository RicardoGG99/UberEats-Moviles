import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//User
import Dashboard from "./pages/Dashboard";
import DashboardProduct from "./pages/DashboardProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterPayment from "./pages/RegisterPayment";
import Cart from "./pages/Cart";
import Map from "./pages/Map";

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
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "Welcome",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Enter to your Account",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
          }}
        />

        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            title: "Welcome to the Map",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
          }}
        />

        <Stack.Screen
          name="AdminLogin"
          component={AdminLogin}
          options={{
            title: "Enter to your Administrator Account",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Join Uber Eats",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
          }}
        />

        <Stack.Screen
          name="DashboardProduct"
          component={DashboardProduct}
          options={{
            title: "Check the Menu",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{
            title: "Welcome Administrator",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="AdminDashboardProduct"
          component={AdminDashboardProduct}
          options={{
            title: "Check the Menu Administrator",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="RegisterPayment"
          component={RegisterPayment}
          options={{
            title: "Register your Payment",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="CreateEstablishment"
          component={CreateEstablishment}
          options={{
            title: "Create your own Establishment",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="CreateProduct"
          component={CreateProduct}
          options={{
            title: "Create your own Product",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="UpdateEstablishment"
          component={UpdateEstablishment}
          options={{
            title: "Update Establishment",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="UpdateProduct"
          component={UpdateProduct}
          options={{
            title: "Update Product",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Check your Shopping Cart",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
