// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity, View, Image, Text, TextInput, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { Formik } from 'formik';
// import { getRes } from '../connectionToBack/setGetRes';

// //styles
// import { ButtonStyles } from '../styles/buttons';
// import { Containers } from '../styles/containers';
// import { Images } from '../styles/images';
// import { Texts } from '../styles/texts';
// import { Titles } from '../styles/titles';
// import { Views } from '../styles/views';

// //Components
// import IconInputManager from '../components/IconInputManager';
// import SelectInput from '../components/SelectInput';
// import DateInputManager from '../components/DateInputManager';

// //Fetch
// import updateTaskFetch from '../connectionToBack/updateTaskFetch';

// //Constants declarations
// const { WrapContainer, InnerContainer } = Containers;
// const { PageLogo } = Images;
// const { PageTitle, SubTitle } = Titles;
// const { FormArea, Division, ExtraView } = Views;
// const { MessageBox, ExtraText, TextLink, TextLinkContent } = Texts;
// const { SignButton, SignButtonText } = ButtonStyles;

// const updateTask = ({ navigation }) => {
//   //useState
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [tag, setTag] = useState('');
//   const [dt, setDt] = useState('');

//   const getData = () => {
//     setTitle(navigation.getParam('title'));
//     setDesc(navigation.getParam('dsc'));
//     setTag(navigation.getParam('tag'));
//     setDt(navigation.getParam('dt'));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const update = async () => {
//     const id = navigation.getParam('id');

//     await updateTaskFetch(title, desc, tag.value, dt, id);
//     console.log(title, desc, tag.value, dt, id);
//     const response = getRes();

//     if (response == 'Success') {
//       alert(' Task Updated successfully');
//       setTitle('');
//       setDesc('');
//       setTag('');
//       setDt('Pick a Date for your Task');
//       navigation.navigate('Dashoard');
//     } else {
//       alert('Error Updating the task');
//       setTitle('');
//       setDesc('');
//       setTag('');
//       setDt('Pick a Date for your Task');
//     }
//   };

//   return (
//     <ScrollView>
//       <View style={WrapContainer}>
//         <StatusBar style="dark" />
//         <View style={InnerContainer}>
//           <Image style={PageLogo} resizeMode="cover" source={require('../assets/wunderlist-logo.png')} />
//           <Text style={PageTitle}> Wunderlist </Text>
//           <Text style={SubTitle}> Update your Task </Text>

//           <Formik
//             initialValues={{ title: '', desc: '', tag: '', dt: '' }}
//             onSubmit={(values) => {
//               console.log(values);
//             }}
//           >
//             {/* Funcion que retiene los input fields */}

//             {({ handleChange, handleBlur, handleSubmit, values }) => (
//               <View style={FormArea}>
//                 <IconInputManager
//                   label="Title"
//                   icon="book"
//                   placeholder="Title"
//                   placeholderTextColor="#9CA3AF"
//                   onChangeText={handleChange('title')}
//                   onBlur={handleBlur('title')}
//                   value={values.title}
//                   keyboardType="default"
//                   onChangeText={(title) => setTitle(title)}
//                   value={title}
//                 />

//                 <IconInputManager
//                   label="Description"
//                   icon="clipboard"
//                   placeholder="Description"
//                   placeholderTextColor="#9CA3AF"
//                   onChangeText={handleChange('desc')}
//                   onBlur={handleBlur('desc')}
//                   value={values.desc}
//                   keyboardType="default"
//                   onChangeText={(desc) => setDesc(desc)}
//                   value={desc}
//                 />

//                 <SelectInput
//                   label="Tag"
//                   onChangeText={handleChange('tag')}
//                   onChangeText={(tag) => {
//                     setTag(tag);
//                   }}
//                 />

//                 <DateInputManager
//                   label={dt.toString()}
//                   onChangeText={handleChange('dt')}
//                   onChangeText={(dt) => setDt(dt)}
//                 />

//                 <TouchableOpacity style={SignButton} onPress={update}>
//                   <Text style={SignButtonText}>Update</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </Formik>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default updateTask;
