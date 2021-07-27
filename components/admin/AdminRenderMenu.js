import React, { useState, useEffect } from "react";
import { View, Image, FlatList, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

//fetch
import getCommerceProductsFetch from "../../connectionToBack/getCommerceProductsFetch";
import deleteProdFetch from "../../connectionToBack/deleteProductFetch";

//styles
import { ButtonStyles } from "../../styles/buttons";
import { Images } from "../../styles/images";
import { Texts } from "../../styles/texts";
import { Titles } from "../../styles/titles";
import { Icons } from "../../styles/icons";

//styles declarations
const { DashboardProductButton, NewButton, NewButtonText } = ButtonStyles;
const { ProductImage } = Images;
const { ProductText, PriceText } = Texts;
const { MenuTitle } = Titles;
const { EditProductIcon, TrashProductIcon } = Icons;

const AdminRenderMenu = ({ commerce, label, nav }) => {
  const [data, setData] = useState("");

  const getProducts = async () => {
    const data = await getCommerceProductsFetch(commerce);
    setData(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const goToCreate = () => {
    nav.navigate("CreateProduct", { commerce: commerce });
  };

  console.log(`Data: ${data}`);

  const renderItem = ({ item }) => {
    const deleteProd = () => {
      deleteProdFetch(item.product_id);
      alert("Product Deleted!" + "\n" + "Please Refresh");
    };

    const goToUpdateProduct = () => {
      nav.navigate("UpdateProduct", {
        name: item.product_name,
        dsc: item.product_dsc,
        price: item.product_price,
        id: item.product_id,
      });
    };

    return (
      <View style={DashboardProductButton}>
        <View>
          <Image resizeMode="cover" style={ProductImage} source={item.photo} />
          <Text style={ProductText}> {item.product_name} </Text>
          <Text style={PriceText}> {item.product_price} $ </Text>

          <TouchableOpacity onPress={goToUpdateProduct}>
            <Entypo
              name="edit"
              size={25}
              color="black"
              style={EditProductIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={deleteProd}>
            <Entypo
              name="trash"
              size={25}
              color="black"
              style={TrashProductIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={MenuTitle}> {label}'s Menu </Text>
      <FlatList
        data={data}
        keyExtractor={(commerce) => commerce.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
      />

      <TouchableOpacity style={NewButton} onPress={goToCreate}>
        <Text style={NewButtonText}>Create a New Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminRenderMenu;
