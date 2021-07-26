import React from "react";
import { View } from "react-native";

//Components
import AdminRenderMenu from "../../components/admin/AdminRenderMenu";

//styles
import { Containers } from "../../styles/containers";

//Constants declarations
const { DashboardContainer } = Containers;

const AdminDashboardProduct = ({ route }) => {
  const commerce = route.params.commerce;
  const label2 = route.params.name;
  console.log(commerce, label2);

  return (
    <View style={DashboardContainer}>
      <AdminRenderMenu label={label2} commerce={commerce} />
    </View>
  );
};

export default AdminDashboardProduct;
