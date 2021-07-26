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
  const commerce = route.params.commerce;
  const label2 = route.params.name;
  console.log(commerce, label2);

  return (
    <View style={DashboardContainer}>
      <RenderMenu label={label2} commerce={commerce}/>
    </View>
  );
};

export default DashboardProduct;
