import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import DashboardProduct from "../pages/DashboardProduct";

const screens = {
  DashboardProduct: {
    screen: DashboardProduct,
  },

  Dashboard: {
    screen: Dashboard,
  },

  Login: {
    screen: Login,
  },

  Register: {
    screen: Register,
  },
};

const Navigator = createStackNavigator(screens);

export default createAppContainer(Navigator);
