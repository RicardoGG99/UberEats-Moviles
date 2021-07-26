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

import getCommerceProductsFetch from "../connectionToBack/getCommerceProductsFetch";

const { EstablishmentIcon, TrashIcon, EditIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderEstablishment = ({ item, navigation }) => {
  const goToDashboardProduct = () => {
    navigation.navigate("DashboardProduct", { name: item.name });
  };

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
        <Image style={EstablishmentIcon} source={item.image}></Image>

        <TouchableOpacity onPress={getProducts} style={TaskInput}>
          <TextInput
            item={item}
            value={item.commerce_name}
            editable={false}
            style={textInput}
            keyboardType="default"
          ></TextInput>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="edit" size={25} color="#3CB371" style={EditIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="trash" size={25} color="#3CB371" style={TrashIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderEstablishment;
