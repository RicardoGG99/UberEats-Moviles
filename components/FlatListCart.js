import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

//styles
import { Texts } from "../styles/texts";
import { Views } from "../styles/views";
import { ButtonStyles } from "../styles/buttons";

//styles declarations
const { DashboardTitleText } = Texts;
const { DashboardTitleView } = Views;
const { NewButton, NewButtonText } = ButtonStyles;

const FlatListCart = ({ show, navigation, ...props }) => {
  const goToRegisterPayment = () => {
    navigation.navigate("RegisterPayment");
  };

  return (
    <View style={DashboardTitleView}>
      <Text style={DashboardTitleText}>Check your Shopping Cart</Text>

      <FlatList data={show} {...props}></FlatList>

      <TouchableOpacity onPress={goToRegisterPayment} style={NewButton}>
        <Text style={NewButtonText}> Register your Payment </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListCart;
