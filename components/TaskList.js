import React from 'react';

import { TouchableOpacity, View, Image, Text, TextInput, ScrollView, FlatList, SafeAreaView, Item } from 'react-native';

import { Containers } from '../styles/containers';
const { WrapContainer } = Containers;

const TaskList = ({ ...props }) => {
  return (
    <View style={WrapContainer}>
      <FlatList {...props} />
    </View>
  );
};

export default TaskList;
