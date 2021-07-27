import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";

import createFetch from "../../connectionToBack/createProductFetch";

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

const CreateProduct = ({ navigation, route }) => {
  const id = route.params.commerce;
  console.log(id);
  //useState
  const [name, setName] = useState("");
  const [dsc, setDsc] = useState("");
  const [price, setPrice] = useState("");

  const create = async () => {
    await createFetch(name, dsc, price, id);
    alert("Created!" + "\n" + "Please Refresh");
    navigation.navigate("AdminDashboardProduct");
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <Text style={PageTitle}>
            {" "}
            Build Your Own Product for your Restaurant{" "}
          </Text>
          <Formik
            initialValues={{ name: "", category: "", location: "", dsc: "" }}
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
                />

                <TouchableOpacity onPress={create} style={SignButton}>
                  <Text style={SignButtonText}>Create It</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default CreateProduct;
