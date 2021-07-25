import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Texts } from '../styles/texts';
import { Icons } from '../styles/icons';

const { TextDescription, InputLabel } = Texts;
const { LeftIcon } = Icons;

const DescriptionArea = ({ ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Ionicons name="clipboard" size={27} color="#787878" />
      </View>

      <Text style={InputLabel}> Description </Text>

      <TextInput
        style={TextDescription}
        placeholder="Description"
        placeholderTextColor="#9CA3AF"
        maxLength={40}
        multiline
        numberOfLines={2}
        textAlignVertical="top"
        {...props}
      />
    </View>
  );
};

export default DescriptionArea;
