import React from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Texts } from '../styles/texts';
import { Icons } from '../styles/icons';

const { textInput, InputLabel } = Texts;
const { LeftIcon, RightIcon } = Icons;

const InputManager = ({ label, icon, isPassword, hidePassword, setHidePassword, edit, blurr, ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Entypo name={icon} size={25} color="#40953B" />
      </View>

      <Text style={InputLabel}>{label}</Text>

      <TextInput onBlur={blurr} maxLength={20} editable={edit} style={textInput} {...props} />
      {isPassword && (
        <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={25} color="#40953B" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputManager;
