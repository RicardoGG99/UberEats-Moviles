import React, { useState, useEffect } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
// import { Formik } from 'formik';
// import { SearchBar } from 'react-native-elements';

//Fetch
// import { getRes } from '../connectionToBack/setGetRes';
// import logoutFetch from '../connectionToBack/logoutFetch';

//Components
import DashboardTitle from '../components/DashboardTitle';
import RenderEstablishment from '../components/RenderEstablishment';

//styles
import { ButtonStyles } from '../styles/buttons';
import { Containers } from '../styles/containers';
import { Views } from '../styles/views';
import { Texts } from '../styles/texts';
import { Icons } from '../styles/icons';

// import getTasksFetch from '../connectionToBack/getTasksFetch.js';
import burger from '../assets/burger-king-logo.png';

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { FormArea } = Views;
const { SignIn, SignOut, TaskButton, TaskText, TaskInput } = ButtonStyles;
const { InputLabel, textInput } = Texts;
const { TrashIcon, PinIcon } = Icons;

const Dashboard = ({ navigation }) => {
  const loadEstablishments = async () => {
    //   const data = await getTasksFetch();
    //   console.log('las tareas: ' + JSON.stringify(data));
    //   setShow(data);

    setShow(dataToRender);
  };

  const dataToRender = [
    {
      name: 'Burger King',
      image: burger,
      id: 1,
    },
  ];

  //useState y useEffect
  const [show, setShow] = useState('');

  useEffect(() => {
    loadEstablishments();
  },[]);

  //Redirects
     const logIn = () => {
     navigation.navigate('Login');
    };

  //   const logOut = async () => {
  //     await logoutFetch();
  //     const response = getRes();

  //     if (response == 'Success') {
  //       alert('Logged Out!');
  //       goToDashboard();
  //     } else {
  //       alert('You Must have a Session!');
  //       logIn();
  //     }
  //   };

  //   const goToDashboard = () => {
  //     navigation.navigate('Dashboard');
  //   };

  //   const goToCreateTask = () => {
  //     navigation.navigate('CreateTask');
  //   };

  const onRefresh = React.useCallback(async () => {
    await loadEstablishments();
  });

  //Render Flatlist Items
  const renderItem = ({ item, index }) => {
    return <RenderEstablishment item={item} index={index} show={show} setShow={setShow} />;
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <DashboardTitle show={show} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />

          {/* <View style={FormArea}>
            <View style={SignIn}>
              <Ionicons name="log-in-outline" size={49} />
            </View>
            <View style={SignOut}>
              <Ionicons name="log-out-outline" size={45} />
            </View>
          </View> */}
        </View>
      </View>

       <TouchableHighlight onPress={logIn}>
        <View style={TaskButton}>
          <Text style={TaskText}>Create</Text>
        </View>
      </TouchableHighlight>
      {/* <TouchableHighlight>
        <View style={TaskButton}>
          <Text style={TaskText} onPress={goToUpdateUser}>
            Update your user
          </Text>
        </View>
      </TouchableHighlight> */}
    </View>

    // <Formik
    //     initialValues={{ search: '' }}
    //     onSubmit={(values) => {
    //       console.log(values);
    //     }}
    //   >
    //     {({ handleChange, handleBlur, handleSubmit, values }) => (
    //       <SearchBar
    //         placeholder="Filter your Tasks"
    //         placeholderTextColor="#9CA3AF"
    //         onChangeText={handleChange(search)}
    //         onBlur={handleBlur('search')}
    //         value={values.search}
    //         keyboardType="default"
    //         onChangeText={(search) => {
    //           setSearch(search);
    //         }}
    //         value={search}
    //       />
    //     )}
    //   </Formik>
  );
};

export default Dashboard;
