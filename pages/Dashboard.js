import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

//Components
import DashboardTitle from "../components/DashboardTitle";
import RenderEstablishment from "../components/RenderEstablishment";

//styles
import { Containers } from "../styles/containers";

//fetch
import getCommercesFetch from "../connectionToBack/getCommercesFetch";

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;

const Dashboard = ({ navigation }) => {
  const loadEstablishments = async () => {
    const data = await getCommercesFetch();
    console.log("las negocios: " + JSON.stringify(data));
    setShow(data);
  };

  //useState y useEffect
  const [show, setShow] = useState("");

  useEffect(() => {
    loadEstablishments();
  }, []);

  //Render Flatlist Items
  const renderItem = ({ item }) => {
    return <RenderEstablishment navigation={navigation} item={item} />;
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <DashboardTitle
            show={show}
            renderItem={renderItem}
            keyExtractor={(item) => item.commerce_id.toString()}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
