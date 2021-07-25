// import React, { useState } from 'react';
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
// import DescriptionArea from '../components/DescriptionArea';

// //Fetch
// import createTaskFetch from '../connectionToBack/createTaskFetch';

// //Constants declarations
// const { WrapContainer, InnerContainer } = Containers;
// const { PageLogo } = Images;
// const { PageTitle, SubTitle } = Titles;
// const { FormArea, Division, ExtraView } = Views;
// const { MessageBox, ExtraText, TextLink, TextLinkContent } = Texts;
// const { SignButton, SignButtonText } = ButtonStyles;

// const createTask = ({ navigation }) => {
//   //useState

//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [tag, setTag] = useState('');
//   const [dt, setDt] = useState('Pick a Date for your Task');

//   const create = async () => {
//     console.log(tag.value);
//     await createTaskFetch(title, desc, tag.value, dt);
//     const response = getRes();
//     console.log('El tag: ' + tag.value);
//     if (response == 'Success') {
//       alert(' Task Created successfully');
//       setTitle('');
//       setDesc('');
//       setTag('');
//       setDt('Pick a Date for your Task');
//       navigation.navigate('Dashboard');
//       navigation.navigate('Dashboard');
//     } else {
//       alert('Error Creating the task');
//       setTitle('');
//       setDesc('');
//       setTag('');
//       setDt('Pick a Date for your Task');
//     }
//   };

//   // const tagText = 'Select the level of importance';

//   return (
//     <ScrollView>
//       <View style={WrapContainer}>
//         <StatusBar style="dark" />
//         <View style={InnerContainer}>
//           <Image style={PageLogo} resizeMode="cover" source={require('../assets/wunderlist-logo.png')} />
//           <Text style={PageTitle}> Wunderlist </Text>
//           <Text style={SubTitle}> Create a new Task </Text>

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

//                 <DescriptionArea
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
//                   initValue="Select the Level of Importance"
//                 />

//                 <DateInputManager
//                   label={dt.toString()}
//                   onChangeText={handleChange('dt')}
//                   onChangeText={(dt) => setDt(dt)}
//                 />

//                 <TouchableOpacity style={SignButton} onPress={create}>
//                   <Text style={SignButtonText}>Create</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </Formik>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default createTask;
