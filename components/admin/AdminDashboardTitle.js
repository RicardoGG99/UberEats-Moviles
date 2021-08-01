import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import logoutFetch from "../../connectionToBack/logoutFetch";
import { getRes } from "../../connectionToBack/setGetRes";

//styles
import { Texts } from "../../styles/texts";
import { Views } from "../../styles/views";
import { ButtonStyles } from "../../styles/buttons";

//styles declarations
const { DashboardTitleText } = Texts;
const { DashboardTitleView } = Views;
const { NewButton, NewButtonText, LoggOutButton } = ButtonStyles;

//fetch
import getCommercesFetch from "../../connectionToBack/getCommercesFetch";

const AdminDashboardTitle = ({ show, navigation, ...props }) => {
  const goToCreateEstablishment = () => {
    navigation.navigate("CreateEstablishment");
  };

  const logOut = () => {
    logoutFetch();
    const response = getRes();

    if (response == "Success") {
      localStorage.clear();
      alert("Logged Out!");
      goToLogin();
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={DashboardTitleView}>
      <Text style={DashboardTitleText}>
        Check your Available Establishments
      </Text>

      <TouchableOpacity onPress={logOut}>
        <Entypo name="log-out" size={25} style={LoggOutButton} />
      </TouchableOpacity>

      <FlatList data={show} {...props}></FlatList>

      <TouchableOpacity onPress={goToCreateEstablishment} style={NewButton}>
        <Text style={NewButtonText}>Create a New Establishment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminDashboardTitle;
