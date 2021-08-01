import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { Icons } from "../styles/icons";
import { Texts } from "../styles/texts";

// import deleteCommerce from "../connectionToBack/deleteCommerceFetch";

const { TrashCart } = Icons;
const { textInput, ProductPriceCart } = Texts;

const RenderCart = ({ item, navigation }) => {
  const deleteProductFromCart = async () => {
    // await deleteCommerce(item.commerce_id);
    alert("Commerce was Succesfully Deleted, Please Refresh");
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          value={item.commerce_name}
          editable={false}
          style={textInput}
          keyboardType="default"
        ></TextInput>

        <Text style={ProductPriceCart}>100 $</Text>

        <TouchableOpacity onPress={deleteProductFromCart}>
          <Entypo name="trash" color="black" size={40} style={TrashCart} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderCart;
