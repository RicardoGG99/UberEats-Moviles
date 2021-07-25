import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import DashboardProduct from '../pages/DashboardProduct';
// import UpdateUser from '../pages/UpdateUser';

const screens = {
  Dashboard: {
    screen: Dashboard,
  },
  DashboardProduct: {
    screen: DashboardProduct,
  },

  Login: {
    screen: Login,
  },

  // UpdateUser: {
  //   screen: UpdateUser,
  // },

  Register: {
    screen: Register,
  },
};

const UberEatsRoutes = createStackNavigator(screens);

export default createAppContainer(UberEatsRoutes);
