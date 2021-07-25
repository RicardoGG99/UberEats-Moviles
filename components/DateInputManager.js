import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { DatePicker } from 'react-native-woodpicker';
import { Ionicons } from '@expo/vector-icons';

import { Texts } from '../styles/texts';
import { Views } from '../styles/views';
import { Icons } from '../styles/icons';

const { InputLabel, textInput, DateText } = Texts;
const { DateView } = Views;
const { LeftIcon } = Icons;

const DateInputManager = (props) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Ionicons name="calendar" size={27} color="#787878" />
      </View>

      <Text style={InputLabel}>Date</Text>

      <TouchableOpacity style={textInput}>
        <DatePicker androidDisplay="calendar" text={props.label} onDateChange={props.onChangeText} />
      </TouchableOpacity>
    </View>
  );
};

export default DateInputManager;
