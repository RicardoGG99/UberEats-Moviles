import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";

import updateFetch from "../../connectionToBack/updateCommerceFetch";

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

const UpdateEstablishment = ({ route, navigation }) => {
  //useState
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [dsc, setDsc] = useState("");

  useEffect(() => {
    setName(route.params.name);
    setCategory(route.params.category);
    setLocation(route.params.location);
    setDsc(route.params.dsc);
    console.log(route.params.id);
  }, []);

  const update = async () => {
    await updateFetch(name, category, location, dsc, route.params.id);
    alert("Establishment Updated!" + "\n" + "Please Refresh");
    navigation.navigate("AdminDashboard");
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <Text style={PageTitle}> Update Your Restaurant </Text>
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
                  placeholder="Burger King"
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
                  label="Category"
                  icon="book"
                  placeholder="Fast Food"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("category")}
                  blurr={handleBlur("category")}
                  value={values.category}
                  onChangeText={(category) => setCategory(category)}
                  value={category}
                  edit={true}
                />

                <InputManager
                  label="Location"
                  icon="location"
                  placeholder="21st St."
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("location")}
                  blurr={handleBlur("location")}
                  value={values.location}
                  onChangeText={(location) => setLocation(location)}
                  value={location}
                  edit={true}
                />

                <InputManager
                  label="Description"
                  icon="info"
                  placeholder="We Sell Joy"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("dsc")}
                  blurr={handleBlur("dsc")}
                  value={values.dsc}
                  onChangeText={(dsc) => setDsc(dsc)}
                  value={dsc}
                  edit={true}
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

export default UpdateEstablishment;
