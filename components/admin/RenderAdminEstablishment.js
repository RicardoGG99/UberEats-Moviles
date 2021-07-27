import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { Icons } from "../../styles/icons";
import { Texts } from "../../styles/texts";
import { ButtonStyles } from "../../styles/buttons";

import deleteCommerce from "../../connectionToBack/deleteCommerceFetch";

const { EstablishmentIcon, TrashIcon, EditIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderAdminEstablishment = ({ item, navigation }) => {
  const getProducts = async () => {
    navigation.navigate("AdminDashboardProduct", {
      commerce: item.commerce_id,
      name: item.commerce_name,
    });
    console.log(`Render Establishment: ${item}`);
  };

  const deleteCommerceFetch = async () => {
    await deleteCommerce(item.commerce_id);
    alert("Commerce was Succesfully Deleted, Please Refresh");
  };

  const goToUpdateEstablishment = () => {
    navigation.navigate("UpdateEstablishment", {
      name: item.commerce_name,
      category: item.commerce_category,
      location: item.commerce_location,
      dsc: item.commerce_dsc,
      id: item.commerce_id,
    });
  };

  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={getProducts} style={TaskInput}>
          <TextInput
            value={item.commerce_name}
            editable={false}
            style={textInput}
            keyboardType="default"
          ></TextInput>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteCommerceFetch}>
          <Entypo name="trash" color="#40953B" size={25} style={TrashIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToUpdateEstablishment}>
          <Entypo name="edit" color="#40953B" size={25} style={EditIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderAdminEstablishment;
