import React, { useState } from "react";
import "localstorage-polyfill";
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
import loginFetch from "../connectionToBack/loginFetch";
import { getRes } from "../connectionToBack/setGetRes";

//Constants declarations
const { WrapContainer, InnerContainer } = Containers;
const { UberEatsLogo } = Images;
const { SubTitle } = Titles;
const { FormArea, Division, ExtraView } = Views;
const { ExtraText, TextLink, TextLinkContent } = Texts;
const { SignButton, SignButtonText } = ButtonStyles;

const Login = ({ navigation }) => {
  //useState
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Log = async () => {
    await loginFetch(email, password);

    const response = getRes();
    console.log(response);

    if (response == "Success") {
      // localStorage.setItem("CREDENTIALS", JSON.stringify(email, password));
      try {
        localStorage.setItem("CREDENTIALS", JSON.stringify(email, password));
        console.log("el local: " + localStorage.getItem("CREDENTIALS"));
        alert("Logged Successfully");
        goToDashboard();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Credentials are not correct");
      setEmail("");
      setPassword("");
    }
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToAdminDashboard = () => {
    navigation.navigate("AdminDashboard");
  };
  const goToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const goToAdminLogin = () => {
    navigation.navigate("AdminLogin");
  };

  const inputSchema = yup.object({
    email: yup.string().required().trim(),
    password: yup.string().required().min(8),
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
          <Text style={SubTitle}> Log to your Account: </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
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
                {/* <Text style={ExtraText}> {touched.email && errors.email} </Text> */}

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
                {/* <Text style={ExtraText}> {touched.password && errors.password} </Text> */}

                <TouchableOpacity onPress={Log} style={SignButton}>
                  <Text style={SignButtonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={Division} />
                <View style={ExtraView}>
                  <Text style={ExtraText}>Don't have an account already? </Text>
                  <TouchableOpacity onPress={goToRegister} style={TextLink}>
                    <Text style={TextLinkContent}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
                <View style={ExtraView}>
                  <Text style={ExtraText}> Or Click Here to </Text>
                  <TouchableOpacity onPress={goToAdminLogin} style={TextLink}>
                    <Text style={TextLinkContent}>Sign In</Text>
                  </TouchableOpacity>
                  <Text style={ExtraText}> as an Administrator</Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
