import React from "react";
import { View } from "react-native";

//Components
import AdminRenderMenu from "../components/AdminRenderMenu";

//styles
import { Containers } from "../styles/containers";

//Constants declarations
const { DashboardContainer } = Containers;

const AdminDashboardProduct = ({ route }) => {
  const label = route.params.name;

  return (
    <View style={DashboardContainer}>
      <AdminRenderMenu label={label} />
    </View>
  );
};

export default AdminDashboardProduct;
