import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";

//fetch
import updateFetch from "../../connectionToBack/updateProductFetch";
import { getRes } from "../../connectionToBack/setGetRes";

//Components
import InputManager from "../../components/InputManager";

//styles
import { Containers } from "../../styles/containers";
import { Views } from "../../styles/views";
import { ButtonStyles } from "../../styles/buttons";
import { Titles } from "../../styles/titles";

//styles declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { FormArea } = Views;
const { SignButton, SignButtonText } = ButtonStyles;
const { PageTitle } = Titles;

const UpdateProduct = ({ navigation, route }) => {
  //useState
  const [name, setName] = useState("");
  const [dsc, setDsc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setName(route.params.name);
    setDsc(route.params.dsc);
    setPrice(route.params.price);
  }, []);

  const update = async () => {
    await updateFetch(name, dsc, price, route.params.id);
    const response = getRes();

    if (response == "Success") {
      alert("Product Updated!" + "\n" + "Please Refresh");
      navigation.navigate("AdminDashboardProduct");
    } else {
      alert("Product could not be updated");
      setName("");
      setDsc("");
      setPrice("");
    }
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <Text style={PageTitle}> Update Your Product </Text>
          <Formik
            initialValues={{ name: "", dsc: "", price: "" }}
            handleSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, values }) => (
              <View style={FormArea}>
                <InputManager
                  label="Name"
                  icon="user"
                  placeholder="Whopper"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("name")}
                  blurr={handleBlur("name")}
                  value={values.name}
                  keyboardType="default"
                  onChangeText={(name) => setName(name)}
                  value={name}
                  edit={true}
                />

                <InputManager
                  label="Description"
                  icon="info"
                  placeholder="Hamburger with Onions, Lettuce and Tomatoes"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("dsc")}
                  blurr={handleBlur("dsc")}
                  value={values.dsc}
                  onChangeText={(dsc) => setDsc(dsc)}
                  value={dsc}
                  edit={true}
                />

                <InputManager
                  label="Price"
                  icon="credit"
                  placeholder="$$$ (USD)"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("price")}
                  blurr={handleBlur("price")}
                  value={values.location}
                  onChangeText={(price) => setPrice(price)}
                  value={price}
                  edit={true}
                  keyboardType="number-pad"
                />

                <TouchableOpacity onPress={update} style={SignButton}>
                  <Text style={SignButtonText}>Update It</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default UpdateProduct;
