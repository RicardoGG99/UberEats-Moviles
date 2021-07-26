import React from "react";
import { View, Image, FlatList, Text } from "react-native";

import whopper from "../assets/whopper.png";
import dietcoke from "../assets/dietcoke.png";

//styles
import { ButtonStyles } from "../styles/buttons";
import { Images } from "../styles/images";
import { Texts } from "../styles/texts";
import { Titles } from "../styles/titles";

//styles declarations
const { DashboardProductButton } = ButtonStyles;
const { ProductImage } = Images;
const { ProductText, PriceText } = Texts;
const { MenuTitle } = Titles;

const data = [
  {
    id: 1,
    name: "Whopper",
    price: "5.5$",
    photo: whopper,
    restaurant: "Burger King",
  },

  {
    id: 2,
    name: "Diet Coke",
    price: "2.5$",
    photo: dietcoke,
    restaurant: "Burger King",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={DashboardProductButton}>
      <View>
        <Image resizeMode="cover" style={ProductImage} source={item.photo} />
        <Text style={ProductText}> {item.name} </Text>
        <Text style={PriceText}> {item.price} </Text>
      </View>
    </View>
  );
};

const RenderMenu = ({ label }) => {
  return (
    <View>
      <Text style={MenuTitle}> {label}'s Menu </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
      />
    </View>
  );
};

export default RenderMenu;
