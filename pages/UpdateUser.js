// import React, { useState } from 'react';
// import { TouchableOpacity, View, Image, Text, TextInput, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { Formik } from 'formik';

// //styles
// import { ButtonStyles } from '../styles/buttons';
// import { Containers } from '../styles/containers';
// import { Images } from '../styles/images';
// import { Texts } from '../styles/texts';
// import { Titles } from '../styles/titles';
// import { Views } from '../styles/views';

// //Components
// import IconInputManager from '../components/IconInputManager';

// //Fetch
// // import registerFetch from '../connectionToBack/registerFetch';
// // import { getRes } from '../connectionToBack/setGetRes';

// //Constants declarations
// const { WrapContainer, InnerContainer } = Containers;
// const { PageLogo } = Images;
// const { PageTitle, SubTitle } = Titles;
// const { FormArea, Division, ExtraView } = Views;
// const { MessageBox, ExtraText, TextLink, TextLinkContent } = Texts;
// const { SignButton, SignButtonText } = ButtonStyles;

// const UpdateUser = ({ navigation }) => {
//   //useState
//   const [hidePassword, setHidePassword] = useState(true);

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   //   const Log = async () => {
//   //     if (password == confPassword) {
//   //       await registerFetch(username, email, password);
//   //       const response = getRes();

//   //       if (response == 'Success') {
//   //         alert('User registered successfully');
//   //         goToLogin();
//   //       } else {
//   //         alert('Username or Email already exists');
//   //         setUsername('');
//   //         setEmail('');
//   //       }
//   //     } else {
//   //       alert('The password confirmation is not correct');
//   //       setPassword('');
//   //       setConfPassword('');
//   //     }
//   //   };

//   return (
//     <ScrollView>
//       <View style={WrapContainer}>
//         <StatusBar style="dark" />
//         <View style={InnerContainer}>
//           <Image style={PageLogo} resizeMode="cover" source={require('../assets/wunderlist-logo.png')} />
//           <Text style={PageTitle}> Wunderlist </Text>
//           <Text style={SubTitle}> Update your Email: </Text>

//           <Formik
//             initialValues={{ username: '', email: '', password: '', confPassword: '' }}
//             onSubmit={(values) => {
//               console.log(values);
//             }}
//           >
//             {/* Funcion que retiene los input fields */}

//             {({ handleChange, handleBlur, handleSubmit, values }) => (
//               <View style={FormArea}>
//                 <IconInputManager
//                   label="Username"
//                   icon="person-circle-sharp"
//                   placeholder="luisRG123"
//                   placeholderTextColor="#9CA3AF"
//                   onChangeText={handleChange('username')}
//                   onBlur={handleBlur('username')}
//                   value={values.username}
//                   keyboardType="default"
//                   onChangeText={(username) => setUsername(username)}
//                   value={username}
//                   able={false}
//                 />

//                 <IconInputManager
//                   label="Email Address"
//                   icon="mail"
//                   placeholder="richardg@gmail.com"
//                   placeholderTextColor="#9CA3AF"
//                   onChangeText={handleChange('email')}
//                   onBlur={handleBlur('email')}
//                   value={values.email}
//                   keyboardType="email-address"
//                   onChangeText={(email) => setEmail(email)}
//                   value={email}
//                   able={true}
//                 />

//                 <IconInputManager
//                   label="Password"
//                   icon="ios-lock-closed"
//                   placeholder="********"
//                   placeholderTextColor="#9CA3AF"
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   secureTextEntry={hidePassword}
//                   isPassword={true}
//                   hidePassword={hidePassword}
//                   setHidePassword={setHidePassword}
//                   onChangeText={(password) => setPassword(password)}
//                   value={password}
//                   able={false}
//                 />

//                 <TouchableOpacity style={SignButton}>
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

// export default UpdateUser;
