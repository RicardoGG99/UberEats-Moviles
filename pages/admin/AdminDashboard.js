import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

//Components
import AdminDashboardTitle from "../../components/admin/AdminDashboardTitle";
import RenderAdminEstablishment from "../../components/admin/RenderAdminEstablishment";

//styles
import { Containers } from "../../styles/containers";
import { Texts } from "../../styles/texts";

//styles declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { textInput } = Texts;

//fetch
import getCommercesFetch from "../../connectionToBack/getCommercesFetch";
import logoutFetch from "../../connectionToBack/logoutFetch";
import { getRes } from "../../connectionToBack/setGetRes";

const AdminDashboard = ({ navigation }) => {
  const [show, setShow] = useState("");

  const loadEstablishments = async () => {
    const data = await getCommercesFetch();
    console.log("los negocios: " + JSON.stringify(data));
    setShow(data);
  };

  useEffect(() => {
    loadEstablishments();
  }, []);

  const renderItem = ({ item }) => {
    return <RenderAdminEstablishment navigation={navigation} item={item} />;
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <AdminDashboardTitle
            navigation={navigation}
            show={show}
            renderItem={renderItem}
            keyExtractor={(item) => item.commerce_id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminDashboard;
