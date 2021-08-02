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

import deleteCarItemFetch from "../connectionToBack/deleteCarItem";

const { TrashCart } = Icons;
const { textInput, ProductPriceCart } = Texts;

const RenderCart = ({ item, navigation }) => {
  const deleteProductFromCart = async () => {
    await deleteCarItemFetch(item.id);
    console.log(item.id);
    alert("Item was Succesfully Deleted from Cart, Please Refresh");
  };

  console.log("este es el carrito: " + item);

  return (
    <ScrollView>
      <View>
        <TextInput
          value={item.name}
          editable={false}
          style={textInput}
          keyboardType="default"
        ></TextInput>

        <Text style={ProductPriceCart}>{item.price}$</Text>

        <TouchableOpacity onPress={deleteProductFromCart}>
          <Entypo name="trash" color="black" size={40} style={TrashCart} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderCart;
