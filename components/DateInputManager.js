import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DatePicker } from "react-native-woodpicker";
import { Ionicons } from "@expo/vector-icons";

import { Texts } from "../styles/texts";
import { Icons } from "../styles/icons";

const { InputLabel, textInput } = Texts;
const { LeftIcon } = Icons;

const DateInputManager = (props) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Ionicons name="calendar" size={27} color="#40953B" />
      </View>

      <Text style={InputLabel}>Date</Text>

      <TouchableOpacity style={textInput}>
        <DatePicker
          androidDisplay="calendar"
          text={props.label}
          onDateChange={props.onChangeText}
          textColor="white"
          textInputStyle={{ color: "white" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateInputManager;
