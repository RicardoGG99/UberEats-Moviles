import React from "react";
import { View, TouchableOpacity, TextInput, ScrollView } from "react-native";

import { Texts } from "../styles/texts";
import { ButtonStyles } from "../styles/buttons";
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderEstablishment = ({ item, navigation }) => {
  const getProducts = async () => {
    navigation.navigate("DashboardProduct", {
      commerce: item.commerce_id,
      name: item.commerce_name,
    });
    console.log(`Render Establishment: ${item}`);
  };
  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={getProducts} style={TaskInput}>
          <TextInput
            item={item}
            value={item.commerce_name}
            editable={false}
            style={textInput}
            keyboardType="default"
          ></TextInput>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderEstablishment;
