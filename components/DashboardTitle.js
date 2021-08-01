import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import logoutFetch from "../connectionToBack/logoutFetch";
import { getRes } from "../connectionToBack/setGetRes";

//styles
import { Texts } from "../styles/texts";
import { Views } from "../styles/views";
import { ButtonStyles } from "../styles/buttons";
import { AsyncStorage } from "react-native";

//styles declarations
const { DashboardTitleText } = Texts;
const { DashboardTitleView } = Views;
const { LoggOutButton, SignButton, SignButtonText } = ButtonStyles;

const DashboardTitle = ({ show, navigation, ...props }) => {
  const logOut = async () => {
    await logoutFetch();
    const response = getRes();

    if (response == "Success") {
      AsyncStorage.clear();
      alert("Logged Out!");
      goToLogin();
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={DashboardTitleView}>
      <Text style={DashboardTitleText}>
        Check your Available Establishments
      </Text>

      <TouchableOpacity onPress={logOut}>
        <Entypo name="log-out" size={45} style={LoggOutButton} />
      </TouchableOpacity>

      <FlatList data={show} {...props}></FlatList>

      <TouchableOpacity onPress={goToCart} style={SignButton}>
        <Text style={SignButtonText}>Go to your Shopping Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardTitle;
