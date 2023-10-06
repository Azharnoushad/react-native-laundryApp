import { StyleSheet, Text, View, SafeAreaView,Image } from "react-native";
import React from "react";
import LottieAnimationView from "lottie-react-native";

const OrderScreen = () => {
  return (
    <SafeAreaView>
      <LottieAnimationView source={require("../../assets/thumbs.json")} style={{width:300,height:360,alignSelf:"center",marginTop:40,justifyContent:"center"}} autoPlay loop={false} speed={0.7} />
      <Text style={{marginTop:40,fontSize:19,fontWeight:"600",textAlign:"center"}}>Your order has been placed</Text>
      <LottieAnimationView source={require("../../assets/sparkle.json")} style={{width:300,height:360,alignSelf:"center",marginTop:40,justifyContent:"center"}} autoPlay loop={false} speed={0.7} />

    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
