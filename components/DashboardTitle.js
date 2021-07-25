import React from 'react';

import { View, Text, FlatList } from 'react-native';

import { Texts } from '../styles/texts';
import { Views } from '../styles/views';

const { DashboardTitleText } = Texts;
const { DashboardTitleView } = Views;

const DashboardTitle = ({ show, ...props }) => {
  return (
    <View style={DashboardTitleView}>
      <Text style={DashboardTitleText}> Check your Available Establishments </Text>

      <FlatList data={show} {...props}></FlatList>
    </View>
  );
};

export default DashboardTitle;
