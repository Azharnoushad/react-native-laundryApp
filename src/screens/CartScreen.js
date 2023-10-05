import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState([]);

  const deliveryTimes = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const proceedToCartHandler = () => {
    if(!selectedDate || !selectedTime || !deliveryTime){
      Alert.alert('Empty or invalid', 'Please select all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    if(selectedDate && selectedTime && deliveryTime){
      navigation.replace("CartPage")
    }
  }
  return (
    <>
    <View>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 15 }}>
        Enter Address
      </Text>
      <TextInput
        style={{
          padding: 40,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 80,
          borderRadius: 9,
          marginHorizontal: 15,
          marginTop: 15,
          marginBottom: 15,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 15 }}>
        Pickup Date
      </Text>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2023-10-01")}
        endDate={new Date("2023-10-31")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      >
        Select Time
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
      >
        {times.map((time) => {
          return (
            <Pressable
              onPress={() => setSelectedTime(time.time)}
              key={time.id}
              style={{
                padding: 15,
                borderWidth: 0.5,
                marginRight: 20,
                borderRadius: 10,
                borderColor: selectedTime === time.time ? "red" : "gray",
              }}
            >
              <Text
                style={{ color: selectedTime === time.time ? "red" : "black" }}
              >
                {time.time}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      >
        Delivery Time
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
      >
        {deliveryTimes.map((item) => {
          return (
            <Pressable
              onPress={() => setDeliveryTime(item.name)}
              key={item.id}
              style={{
                padding: 15,
                borderWidth: 0.5,
                marginRight: 20,
                borderRadius: 10,
                borderColor: deliveryTime === item.name ? "red" : "gray",
              }}
            >
              <Text
                style={{ color: deliveryTime === item.name ? "red" : "black" }}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      
    </View>
    {cart.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 10,
            borderRadius: 10,
            marginHorizontal:15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop:"auto"
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 22, paddingBottom: 5 }}>
              {cart.length} items | {totalAmount}
            </Text>
            <Text style={{ color: "#fff" }}>Extra charges might apply</Text>
          </View>

          <Pressable onPress={proceedToCartHandler}>
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "500",
                letterSpacing: 1.5,
              }}
            >
              Proceed to cart
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
