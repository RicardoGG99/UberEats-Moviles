import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import burger from "../assets/burger-king-logo.png";

//Components
import DashboardTitle from "../components/DashboardTitle";
import RenderEstablishment from "../components/RenderEstablishment";

//styles
import { Containers } from "../styles/containers";

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;

const Dashboard = ({ navigation }) => {
  const loadEstablishments = async () => {
    //   const data = await getTasksFetch();
    //   console.log('las tareas: ' + JSON.stringify(data));
    //   setShow(data);

    setShow(dataToRender);
  };

  const dataToRender = [
    {
      id: 1,
      name: "Burger King",
      image: burger,
    },
  ];

  //useState y useEffect
  const [show, setShow] = useState("");

  useEffect(() => {
    loadEstablishments();
  }, []);

  //Redirects

  const onRefresh = React.useCallback(async () => {
    await loadEstablishments();
  });

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
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
