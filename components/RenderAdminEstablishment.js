import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { Icons } from "../styles/icons";
import { Texts } from "../styles/texts";
import { ButtonStyles } from "../styles/buttons";

const { EstablishmentIcon, TrashIcon, EditIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderAdminEstablishment = ({ item, navigation }) => {
  const goToDashboardProduct = () => {
    navigation.navigate("AdminDashboardProduct", { name: item.name });
  };

  return (
    <ScrollView>
      <View>
        <Image style={EstablishmentIcon} source={item.image}></Image>

        <TouchableOpacity onPress={goToDashboardProduct} style={TaskInput}>
          <TextInput
            value={item.name}
            editable={false}
            style={textInput}
            keyboardType="default"
          ></TextInput>
        </TouchableOpacity>

        <TouchableOpacity style={TrashIcon}>
          <Entypo name="trash" color="#40953B" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={EditIcon}>
          <Entypo name="edit" color="#40953B" size={25} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderAdminEstablishment;
