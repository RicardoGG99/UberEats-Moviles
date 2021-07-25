import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Texts } from '../styles/texts';
import { Icons } from '../styles/icons';

const { textInput, InputLabel } = Texts;
const { LeftIcon, RightIcon } = Icons;

//useState
const [hidePassword, setHidePassword] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const LoginForm = () => {
  return (
    <View>
      <View style={LeftIcon}>
        <Entypo name="email" size={25} color="#40953B" />
      </View>

      <Text style={InputLabel}> Email </Text>

      <TextInput
        autoFocus={true}
        onBlur={onBlur}
        maxLength={20}
        style={textInput}
        placeholder="garystu@gmail.com"
        placeholderTextColor="#9CA3AF"
      />

      <View style={LeftIcon}>
        <Entypo name="" size={25} color="#40953B" />
      </View>

      <Text style={InputLabel}>{label}</Text>

      <TextInput onBlur={onBlur} maxLength={20} editable={edit} style={textInput} {...props} />

      <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
        <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={25} color="#40953B" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmit} style={SignButton}>
        <Text style={SignButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
