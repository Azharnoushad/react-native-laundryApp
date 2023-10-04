import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/free-vector/cartoon-laundry-service-background_52683-84121.jpg?t=st=1696401396~exp=1696401996~hmac=962ec750077c3f04c0955d4fc489f2177b59a22d8de3261ee3d64183ae5f7287",
    "https://img.freepik.com/free-vector/laundry-room-isometric-composition-with-indoor-view-laundry-room-with-washing-machines-detergents-people_1284-32370.jpg?w=996&t=st=1696401428~exp=1696402028~hmac=5b8d9a610ec7e231f0223c23c440f460b8b76764f75111c608e77a12aa0981d5",
    "https://image.freepik.com/free-vector/laundry-concept-cartoon-flat-illustration_87771-6842.jpg",
    "https://img.freepik.com/free-vector/apartment-building-site-laundry-room-cartoon-composition-with-tenants-using-washing-machine-detergent-bottles-illustration_1284-64894.jpg?w=1060&t=st=1696401467~exp=1696402067~hmac=8dfc4a2863d56c0663fa390aec155f74965fc86276be746d0dfa28ebb080a92c",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{ borderRadius: 6, width: "94%", marginTop: 10 }}
        resizeMode={"cover"}
        resizeMethod={"resize"}
        activeOpacity={0.5}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
