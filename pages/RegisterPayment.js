import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";

// import createFetch from "../../connectionToBack/createCommerceFetch";

//Components
import InputManager from "../components/InputManager";
import DateInputManager from "../components/DateInputManager";

//styles
import { Containers } from "../styles/containers";
import { Views } from "../styles/views";
import { ButtonStyles } from "../styles/buttons";
import { Titles } from "../styles/titles";

//styles declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { FormArea } = Views;
const { SignButton, SignButtonText } = ButtonStyles;
const { PageTitle } = Titles;

import registerPaymentFetch from "../connectionToBack/registerPaymentFetch";
import { getRes } from "../connectionToBack/setGetRes";

const RegisterPayment = ({ navigation, route }) => {
  //useState
  const [origin, setOrigin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [owner, setOwner] = useState("");
  const [ci, setCi] = useState("");
  const [date, setDate] = useState("Pick a Date");
  const [ref, setRef] = useState("");
  const [amount, setAmount] = useState("");

  const commerce = route.params.commerce;
  console.log("el commerce: " + commerce)

  const goToAdminDashboard = () => {
    navigation.navigate("AdminDashboard");
  };

  const register = async (commerce) => {
    await registerPaymentFetch(commerce);
    const response = getRes();
    console.log(response)
    if(response == "Success"){
       alert("Payment Created");
    }else{
      alert("Error Creating Payment!")
    }
  };

  return (
    <ScrollView>
      <View style={WrapContainer}>
        <StatusBar style="light" />
        <View style={InnerContainer}>
          <View style={DashboardContainer}>
            <Text style={PageTitle}> Register Your Payment </Text>
            <Formik
              initialValues={{
                origin: "",
                destiny: "",
                owner: "",
                ci: "",
                date: "",
                ref: "",
                amount: "",
              }}
              handleSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, values }) => (
                <View style={FormArea}>
                  <InputManager
                    label="Origin Bank"
                    icon="credit"
                    placeholder="Bank Of America"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChange("origin")}
                    blurr={handleBlur("origin")}
                    value={values.origin}
                    onChangeText={(origin) => setOrigin(origin)}
                    value={origin}
                    edit={true}
                  />

                  <InputManager
                    label="Destiny Bank"
                    icon="credit"
                    placeholder="Wells Fargo"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChange("destiny")}
                    blurr={handleBlur("destiny")}
                    value={values.destiny}
                    onChangeText={(destiny) => setDestiny(destiny)}
                    value={destiny}
                    edit={true}
                  />

                  <InputManager
                    label="Account's Owner Name"
                    icon="text-document"
                    placeholder="Louis Armstrong"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChange("owner")}
                    blurr={handleBlur("owner")}
                    value={values.owner}
                    onChangeText={(owner) => setOwner(owner)}
                    value={owner}
                    edit={true}
                  />

                  <InputManager
                    label="Account's Owner ID"
                    icon="v-card"
                    placeholder="27.637.837"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChange("ci")}
                    blurr={handleBlur("ci")}
                    value={values.ci}
                    onChangeText={(ci) => setCi(ci)}
                    value={ci}
                    edit={true}
                    keyboardType="number-pad"
                  />

                  <DateInputManager
                    label={date.toString()}
                    onChangeText={handleChange("date")}
                    onChangeText={(date) => setDate(date)}
                  />

                  <InputManager
                    label="Reference Number"
                    icon="user"
                    placeholder="4455875"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChange("ref")}
                    blurr={handleBlur("ref")}
                    value={values.ref}
                    onChangeText={(ref) => setRef(ref)}
                    value={ref}
                    edit={true}
                    keyboardType="number-pad"
                  />

                  <InputManager
                    label="Amount"
                    icon="credit"
                    placeholder="20"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChange("amount")}
                    blurr={handleBlur("amount")}
                    value={values.amount}
                    onChangeText={(amount) => setAmount(amount)}
                    value={amount}
                    edit={true}
                    keyboardType="number-pad"
                  />

                  <TouchableOpacity onPress={register} style={SignButton}>
                    <Text style={SignButtonText}>Register your Payment</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterPayment;
