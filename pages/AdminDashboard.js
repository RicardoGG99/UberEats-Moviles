import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import burger from "../assets/burger-king-logo.png";

//Components
import DashboardTitle from "../components/DashboardTitle";
import RenderAdminEstablishment from "../components/RenderAdminEstablishment";

//styles
import { Containers } from "../styles/containers";
import { Texts } from "../styles/texts";

//styles declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { textInput } = Texts;

const AdminDashboard = ({ navigation }) => {
  const [show, setShow] = useState("");

  const dataToRender = [
    {
      id: 1,
      name: "Burger King",
      image: burger,
    },
  ];

  const loadEstablishments = async () => {
    setShow(dataToRender);
  };

  useEffect(() => {
    loadEstablishments();
  }, []);

  const renderItem = ({ item }) => {
    return <RenderAdminEstablishment navigation={navigation} item={item} />;
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <DashboardTitle
            show={show}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminDashboard;
