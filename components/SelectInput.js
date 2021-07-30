import React from "react";
import ModalSelector from "react-native-modal-selector";

import { View, Text, StyleSheet } from "react-native";
import { Texts } from "../styles/texts";

const { InputLabel } = Texts;

const options = [
  { key: "1", value: "Banesco", label: "Banesco" },
  { key: "2", value: "Mercantil", label: "Mercantil" },
  {
    key: "3",
    value: "Banco Occidental de Descuento",
    label: "Banco Occidental de Descuento",
  },
];

const SelectStyles = StyleSheet.create({
  SelectView: {
    flex: 1,
    justifyContent: "space-around",
  },

  SelectText: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 15,
  },

  SelectBackground: {
    backgroundColor: "black",
    borderBottomWidth: 1,
  },

  SelectInitialText: {
    color: "#A5A6A6",
    fontSize: 15,
    textAlign: "center",
  },

  SelectedItemTextStyle: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },

  SelectTextStyle: {
    color: "#A5A6A6",
  },
});

const SelectInput = ({ label, onChangeText, ...props }) => {
  return (
    <View style={SelectStyles.SelectView}>
      <Text style={InputLabel}>{label}</Text>
      <ModalSelector
        cancelText="Cancel"
        data={options}
        onChange={onChangeText}
        closeOnChange={true}
        style={SelectStyles.SelectBackground}
        optionStyle={SelectStyles.SelectText}
        initValueTextStyle={SelectStyles.SelectInitialText}
        selectedItemTextStyle={SelectStyles.SelectedItemTextStyle}
        selectTextStyle={SelectStyles.SelectTextStyle}
        {...props}
      />
    </View>
  );
};

export default SelectInput;
