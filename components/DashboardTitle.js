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

const DashboardTitle = ({ show, ...props }) => {
  return (
    <View style={DashboardTitleView}>
      <Text style={DashboardTitleText}>
        {" "}
        Check your Available Establishments{" "}
      </Text>

      <FlatList data={show} {...props}></FlatList>

      <TouchableOpacity>
        <View style={NewButton}>
          <Text style={NewButtonText}>Create a New Establishment</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardTitle;
