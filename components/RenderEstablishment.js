import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Icons } from '../styles/icons';
import { Texts } from '../styles/texts';
import { ButtonStyles } from '../styles/buttons';

import getTasksById from '../connectionToBack/getTasksByIdFetch';
import deleteTask from '../connectionToBack/deleteTaskFetch';
import { getRes } from '../connectionToBack/setGetRes';

const { EstablishmentIcon, PinIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderEstablishment = ({ navigation, item, index, show, setShow }) => {
  // const setColorPinIcon = (index) => {
  //   let newArr = [...show];

  //   if (newArr[index].color == 'red') {
  //     newArr[index].color = '#9CA3AF';
  //   } else {
  //     newArr[index].color = 'red';
  //   }

  //   setShow(newArr);
  // };

  const [data, setData] = useState('');

  // const seeEstablishment = async () => {
  //   const res = await getEstablishmentById(item.id);
  //   setData(res);
  //   nav.navigate('updateTask');
  //   console.log(data);
  // };

  const deleEstablishment = async () => {
    await deleteEstablishment(item.id);

    const res = getRes();

    if (res == 'Success') {
      alert('Task Deleted');
      console.log('Task Deleted!');
    } else {
      alert('Could Not Delete Task');
      console.log('Error!');
    }
  };

  // const goToUpdateTask = () => {
  //   navigation.navigate('UpdateTask', item);
  // };

  const goToRegister = () => {
    alert('my war levitating');
  };

  return (
    <ScrollView>
      <View>
        <TouchableOpacity style={EstablishmentIcon}>
          <Image source={item.image}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToRegister} style={TaskInput}>
          <TextInput value={item.name} editable={false} style={textInput} keyboardType="default"></TextInput>
        </TouchableOpacity>

        {/* <TouchableOpacity style={TrashIcon}>
          <Ionicons onPress={deleTask} name="trash-sharp" size={35} color="#9CA3AF" />
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default RenderEstablishment;
