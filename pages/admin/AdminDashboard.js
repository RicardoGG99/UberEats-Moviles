import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

//Components
import AdminDashboardTitle from "../../components/admin/AdminDashboardTitle";
import RenderAdminEstablishment from "../../components/admin/RenderAdminEstablishment";

//styles
import { Containers } from "../../styles/containers";

//styles declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;

//fetch
import getCommercesFetch from "../../connectionToBack/getCommercesFetch";

const AdminDashboard = ({ navigation }) => {
  const [show, setShow] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadEstablishments = async () => {
    const data = await getCommercesFetch();
    console.log("los negocios: " + JSON.stringify(data));
    setShow(data);
  };

  useEffect(() => {
    loadEstablishments();
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await wait(2000).then(() => {
      loadEstablishments();
      setRefreshing(false);
    });
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
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminDashboard;
