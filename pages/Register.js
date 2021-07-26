import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as yup from "yup";

//styles
import { ButtonStyles } from "../styles/buttons";
import { Containers } from "../styles/containers";
import { Images } from "../styles/images";
import { Texts } from "../styles/texts";
import { Titles } from "../styles/titles";
import { Views } from "../styles/views";

//Components
import InputManager from "../components/InputManager";

//Fetch
import registerFetch from '../connectionToBack/registerFetch';
import { getRes } from '../connectionToBack/setGetRes';

//Constants declarations
const { WrapContainer, InnerContainer } = Containers;
const { UberEatsLogo } = Images;
const { SubTitle } = Titles;
const { FormArea, Division, ExtraView } = Views;
const { ExtraText, TextLink, TextLinkContent } = Texts;
const { SignButton, SignButtonText } = ButtonStyles;

const Register = ({ navigation }) => {
  //useState
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Log = async () => {
    await registerFetch(email, password);

    const response = getRes();
    console.log(response);

    if (response == "Success") {
      alert("User Created Successfully");
      goToDashboard();
    } else {
      alert("Credentials are not correct");
      setEmail("");
      setPassword("");
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const inputSchema = yup.object({
    email: yup.string().required().trim(),
    password: yup.string().required().min(8),
    confirmPassword: yup.string().required().min(8),
  });

  return (
    <ScrollView>
      <View style={WrapContainer}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>
          <Image
            style={UberEatsLogo}
            resizeMode="cover"
            source={require("../assets/uber-eats-logo.png")}
          />
          <Text style={SubTitle}> Register a New Account: </Text>

          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={inputSchema}
            handleSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={FormArea}>
                <InputManager
                  autoFocus={true}
                  returnKeyType="next"
                  label="Email"
                  icon="email"
                  placeholder="garystu@gmail.com"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("email")}
                  blurr={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  onChangeText={(email) => setEmail(email)}
                  value={email}
                  edit={true}
                />

                <InputManager
                  label="Password"
                  icon="lock"
                  placeholder="******** (8-20 characters)"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("password")}
                  blurr={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  edit={true}
                />

                <InputManager
                  label="Confirm Password"
                  icon="lock"
                  placeholder="******** (8-20 characters)"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange("confirmPassword")}
                  blurr={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  onChangeText={(confirmPassword) =>
                    setConfirmPassword(confirmPassword)
                  }
                  value={confirmPassword}
                  edit={true}
                />

                <TouchableOpacity onPress={Log} style={SignButton}>
                  <Text style={SignButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={Division} />
                <View style={ExtraView}>
                  <Text style={ExtraText}> Already have an account? </Text>
                  <TouchableOpacity onPress={goToLogin} style={TextLink}>
                    <Text style={TextLinkContent}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
