import React from "react";
import { View } from "react-native";

//Components
import RenderMenu from "../components/RenderMenu";

//styles
import { Titles } from "../styles/titles";
import { Containers } from "../styles/containers";

//Constants declarations
const { DashboardContainer } = Containers;

const DashboardProduct = ({ route }) => {
  const label = route.params.name;

  return (
    <View style={DashboardContainer}>
      <RenderMenu label={label} />
    </View>
  );
};

export default DashboardProduct;
