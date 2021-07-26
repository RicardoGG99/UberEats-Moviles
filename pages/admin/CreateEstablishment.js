import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";

import createFetch from '../../connectionToBack/createCommerceFetch'

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

const CreateEstablishment = () => {
  //useState
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [dsc, setDsc] = useState("");

  const create = async () => {
    await createFetch(name, category, location, dsc);
    alert('Created!')
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <Text style={PageTitle}> Build Your Own Restaurant </Text>
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

export default CreateEstablishment;
