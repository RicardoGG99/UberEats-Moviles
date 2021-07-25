import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { Icons } from "../styles/icons";
import { Texts } from "../styles/texts";
import { ButtonStyles } from "../styles/buttons";

// import getTasksById from "../connectionToBack/getTasksByIdFetch";
// import deleteTask from "../connectionToBack/deleteTaskFetch";
// import { getRes } from "../connectionToBack/setGetRes";

const { EstablishmentIcon, PinIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderEstablishment = ({ item, nav }) => {
  // const seeEstablishment = async () => {
  //   const res = await getEstablishmentById(item.id);
  //   setData(res);
  //   nav.navigate('updateTask');
  //   console.log(data);
  // };

  const deleEstablishment = async () => {
    await deleteEstablishment(item.id);

    const res = getRes();

    if (res == "Success") {
      alert("Task Deleted");
      console.log("Task Deleted!");
    } else {
      alert("Could Not Delete Task");
      console.log("Error!");
    }
  };

  const goToDashboardProduct = () => {
    nav.navigate("DashboardProduct");
  };

  return (
    <ScrollView>
      <View>
        <TouchableOpacity style={EstablishmentIcon}>
          <Image source={item.image}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToDashboardProduct} style={TaskInput}>
          <TextInput
            value={item.name}
            editable={false}
            style={textInput}
            keyboardType="default"
          ></TextInput>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderEstablishment;
