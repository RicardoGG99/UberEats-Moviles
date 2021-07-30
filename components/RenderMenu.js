import React, { useState, useEffect } from "react";
import { View, Image, FlatList, Text, TouchableOpacity } from "react-native";

//fetch
import getCommerceProductsFetch from "../connectionToBack/getCommerceProductsFetch";

//styles
import { ButtonStyles } from "../styles/buttons";
import { Images } from "../styles/images";
import { Texts } from "../styles/texts";
import { Titles } from "../styles/titles";

//styles declarations
const { DashboardProductButton, SignButton, SignButtonText } = ButtonStyles;
const { ProductImage } = Images;
const { ProductText, PriceText } = Texts;
const { MenuTitle } = Titles;

const renderItem = ({ item }) => {
  return (
    <View style={DashboardProductButton}>
      <View>
        <Image resizeMode="cover" style={ProductImage} source={item.photo} />
        <Text style={ProductText}> {item.product_name} </Text>
        <Text style={PriceText}> {item.product_price} $ </Text>
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
    navigation.navigate("RegisterPayment");
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

      <TouchableOpacity onPress={goToRegisterPayment} style={SignButton}>
        <Text style={SignButtonText}>Register your Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderMenu;
