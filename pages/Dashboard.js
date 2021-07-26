import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import burger from "../assets/burger-king-logo.png";

import { Views } from '../styles/views';
import { ButtonStyles } from '../styles/buttons';


const { FormArea } = Views;
const { SignIn, SignOut, TaskButton, TaskText, TaskInput } = ButtonStyles;


//Components
import DashboardTitle from "../components/DashboardTitle";
import RenderEstablishment from "../components/RenderEstablishment";

//styles
import { Containers } from "../styles/containers";

//fetch

import getCommercesFetch from '../connectionToBack/getCommercesFetch';
import logoutFetch from "../connectionToBack/logoutFetch";
import { getRes } from "../connectionToBack/setGetRes";


//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;

const Dashboard = ({ navigation }) => {

  const loadEstablishments = async () => {
   const data = await getCommercesFetch();
    console.log('las negocios: ' + JSON.stringify(data));
    setShow(data);

  };

  const goToDashboard = () => {
    navigation.navigate('Dashboard')
  }

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  const logOut = () => {
    logoutFetch();
    const response = getRes();

    if (response == 'Success') {
      localStorage.clear();
      alert('Logged Out!');
      goToDashboard();
    } else {
      alert('You Must have a Session!');
      goToLogin();
    }
  }

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
            keyExtractor={(item) => item.commerce_id.toString()}
          />
        </View>
      </View>
      <View style={FormArea}>
            <View style={SignIn}>
              <Ionicons onPress={goToLogin} name="log-in-outline" size={49} />
            </View>
            <View style={SignOut}>
              <Ionicons onPress={logOut} name="log-out-outline" size={45} />
            </View>
          </View>
    </View>
  );
};

export default Dashboard;
