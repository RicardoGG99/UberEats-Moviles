import React from "react";
import { View, Image, FlatList, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import whopper from "../assets/whopper.png";
import dietcoke from "../assets/dietcoke.png";

//styles
import { ButtonStyles } from "../styles/buttons";
import { Images } from "../styles/images";
import { Texts } from "../styles/texts";
import { Titles } from "../styles/titles";
import { Icons } from "../styles/icons";

//styles declarations
const { DashboardProductButton, NewButton, NewButtonText } = ButtonStyles;
const { ProductImage } = Images;
const { ProductText, PriceText } = Texts;
const { MenuTitle } = Titles;
const { TrashProductIcon, EditProductIcon } = Icons;

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

        <TouchableOpacity>
          <Entypo size={25} style={EditProductIcon} name="edit" color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo
            size={25}
            style={TrashProductIcon}
            name="trash"
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AdminRenderMenu = ({ label }) => {
  return (
    <View>
      <Text style={MenuTitle}> {label}'s Menu </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
      />
      <TouchableOpacity>
        <View style={NewButton}>
          <Text style={NewButtonText}>Create a New Product</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AdminRenderMenu;
