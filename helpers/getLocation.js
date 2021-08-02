import * as Location from "expo-location";

let res = 0;

const setLocation = async () => {
  let { coords } = await Location.getCurrentPositionAsync();
  const { longitude } = await coords;
  res = longitude;
  return getLocation();
};

const getLocation = () => {
  return res;
};

module.exports = { setLocation, getLocation };
