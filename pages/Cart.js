import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

//Components
import FlatListCart from "../components/FlatListCart";
import RenderCart from "../components/RenderCart";

//styles
import { Containers } from "../styles/containers";

//styles declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;

//fetch
import getCommercesFetch from "../connectionToBack/getCommercesFetch";
import getCarItemsFetch from "../connectionToBack/getCarItemsFetch";

const Cart = ({ navigation }) => {
  const [show, setShow] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadCart = async () => {
    const data = await getCarItemsFetch();
    console.log("los items: " + JSON.stringify(data));
    setShow(data);
  };

  useEffect(() => {
    loadCart();
  },[]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await wait(2000).then(() => {
      loadCart();
      setRefreshing(false);
    });
  }, []);

  const renderItem = ({ item }) => {
    return <RenderCart item={item} />;
  };
  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <FlatListCart
            navigation={navigation}
            show={show}
            renderItem={renderItem}
            keyExtractor={(item) => item[0]}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;
