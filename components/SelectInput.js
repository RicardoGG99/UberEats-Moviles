import React from 'react';
import ModalSelector from 'react-native-modal-selector';

import { View, Text, StyleSheet } from 'react-native';
import { Texts } from '../styles/texts';

const { InputLabel } = Texts;

const options = [
  { key: '1', value: 'Urgent', label: 'Urgent' },
  { key: '2', value: 'Important', label: 'Important' },
  { key: '3', value: 'Less Important', label: 'Less Important' },
  { key: '4', value: 'Not Important', label: 'Not Important' },
];

const SelectStyles = StyleSheet.create({
  SelectView: {
    flex: 1,
    justifyContent: 'space-around',
  },

  SelectText: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 15,
  },

  SelectBackground: {
    backgroundColor: '#E5E7EB',
    borderBottomWidth: 1,
  },

  SelectInitialText: {
    color: 'gray',
    fontSize: 15,
    textAlign: 'center',
  },

  SelectedItemTextStyle: {
    color: 'gray',
    fontSize: 15,
    textAlign: 'center',
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
        {...props}
      />
    </View>
  );
};

export default SelectInput;
