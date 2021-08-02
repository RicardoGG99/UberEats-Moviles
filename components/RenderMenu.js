import React, { useState, useEffect } from "react";
import { View, Image, FlatList, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

//fetch
import getCommerceProductsFetch from "../connectionToBack/getCommerceProductsFetch";
import addItemFetch from "../connectionToBack/addItemFetch";

//styles
import { ButtonStyles } from "../styles/buttons";
import { Images } from "../styles/images";
import { Texts } from "../styles/texts";
import { Titles } from "../styles/titles";
import { Icons } from "../styles/icons";

//styles declarations
const { DashboardProductButton, SignButton, SignButtonText } = ButtonStyles;
const { ProductImage } = Images;
const { ProductText, PriceText } = Texts;
const { MenuTitle } = Titles;
const { CartIcon } = Icons;

const renderItem = ({ item }) => {

  const addToCart = () => {
    addItemFetch(item.product_id)
    alert("Product Added to your Shopping Cart");
  };
  
  return (
    <View style={DashboardProductButton}>
      <View>
        <Image resizeMode="cover" style={ProductImage} source={item.photo} />
        <Text style={ProductText}> {item.product_name} </Text>
        <Text style={PriceText}> {item.product_price} $ </Text>
        <TouchableOpacity onPress={addToCart}>
          <Entypo
            style={CartIcon}
            name="shopping-cart"
            size={60}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RenderMenu = ({ commerce, label, navigation }) => {
  const [data, setData] = useState("");

  const getProducts = async () => {
    const data = await getCommerceProductsFetch(commerce);
    setData(data);
  };

  const goToRegisterPayment = () => {
    navigation.navigate("RegisterPayment", { commerce: commerce });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(`Data: ${data}`);

  return (
    <View>
      <Text style={MenuTitle}> {label}'s Menu </Text>
      <FlatList
        data={data}
        keyExtractor={(commerce) => commerce.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
      />
    </View>
  );
};

export default RenderMenu;
