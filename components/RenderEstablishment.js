import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { Icons } from "../styles/icons";
import { Texts } from "../styles/texts";
import { ButtonStyles } from "../styles/buttons";

const { EstablishmentIcon, PinIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderEstablishment = ({ item, navigation }) => {
  const goToDashboardProduct = () => {
    navigation.navigate("DashboardProduct", { name: item.name });
  };

  return (
    <ScrollView>
      <View>
        <Image style={EstablishmentIcon} source={item.image}></Image>

        <TouchableOpacity onPress={goToDashboardProduct} style={TaskInput}>
          <TextInput
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
