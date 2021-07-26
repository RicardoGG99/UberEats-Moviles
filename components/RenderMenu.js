import React, {useState, useEffect} from "react";
import { View, Image, FlatList, Text } from "react-native";

import whopper from "../assets/whopper.png";
import dietcoke from "../assets/dietcoke.png";

//fetch
import getCommerceProductsFetch from '../connectionToBack/getCommerceProductsFetch'

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
        <Text style={ProductText}> {item.product_name} </Text>
        <Text style={PriceText}> {item.product_price} </Text>
      </View>
    </View>
  );
};

const RenderMenu = ({ commerce, label}) => {

  const [data, setData] = useState('');

  const getProducts = async () => {
    const data =  await getCommerceProductsFetch(commerce);
    setData(data);
  }

  useEffect(()=>{
    getProducts();
  },[])

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
