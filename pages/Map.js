import React, { useState, useEffect, use } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { setLocation, getLocation } from "../helpers/getLocation";
import * as Location from "expo-location";

const Map = () => {
  // const [pin, setPin] = useState({ latitude: 37.78825, longitude: -122.4324 });
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [lon, setLon] = useState(1);

  useEffect(() => {
    const asyncFunction = async () => {
      let { coords } = await Location.getCurrentPositionAsync();
      const { longitude } = await coords;
      return longitude;
    };

    console.log(asyncFunction());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          console.log(data, details);
          setRegion({
            latitude: 10.6649406,
            longitude: -71.6260096,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyDewWF7NCeDdcePBrEnWtQv7hmvh59AhV4",
          language: "en",
          components: "counrty:us",
          type: "address",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.6649406,
          longitude: -71.6260096,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        {/* <Marker
          coordinate={{
            latitude: 10.6649406,
            longitude: -71.6260096,
          }}
          draggable={true}
        >
          <Callout>
            <Text>I'm Here</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start:", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm Here</Text>
          </Callout>
        </Marker> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
