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
import logoutFetch from "../connectionToBack/logoutFetch";
import { getRes } from "../connectionToBack/setGetRes";

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;

const Dashboard = ({ navigation }) => {
  const loadEstablishments = async () => {
    const data = await getCommercesFetch();
    console.log("las negocios: " + JSON.stringify(data));
    setShow(data);
  };

  const goToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const logOut = () => {
    logoutFetch();
    const response = getRes();

    if (response == "Success") {
      localStorage.clear();
      alert("Logged Out!");
      goToDashboard();
    } else {
      alert("You Must have a Session!");
      goToLogin();
    }
  };

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
            keyExtractor={(item) => item.commerce_id.toString()}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
