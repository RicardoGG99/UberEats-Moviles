import React, { useState, useEffect } from "react";
import {
  TouchableHighlight,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

//Components
import DashboardTitle from "../components/DashboardTitle";
import RenderEstablishment from "../components/RenderEstablishment";

//styles
import { ButtonStyles } from "../styles/buttons";
import { Containers } from "../styles/containers";
import { Views } from "../styles/views";
import { Texts } from "../styles/texts";
import { Icons } from "../styles/icons";
import { Shadows } from "../styles/shadows";

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { FormArea, DashboardProductView } = Views;
const { SignIn, SignOut, TaskButton, TaskText, TaskInput } = ButtonStyles;
const { InputLabel, textInput } = Texts;
const { TrashIcon, PinIcon } = Icons;
const { DashboardProductShadow } = Shadows;

const DashboardProduct = ({ navigation }) => {
  return (
    <SafeAreaView style={WrapContainer}>
      <View style={DashboardProductView}></View>
    </SafeAreaView>
  );
};

export default DashboardProduct;
