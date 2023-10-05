import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItems from "../components/DressItems";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);

  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const product = useSelector((state) => state.product.product);

  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) {
      return;
    }
    const fetchProducts = () => {
      products.map((product) => dispatch(getProducts(product)));
    };
    fetchProducts();
  }, []);

  const products = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "We are loading your location"
  );
  const [locationServicesEnaled, setLocationServicesEnaled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  });

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServicesEnaled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "#F0F0F0", flex: 1 }}>
        {/* location and userPhoto */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            paddingHorizontal: 15,
          }}
        >
          <Ionicons name="location-sharp" size={30} color="#fd5c63" />

          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          <Pressable style={{ marginLeft: "auto" }}>
            <FontAwesome name="user" size={30} color="#fd5c63" />
          </Pressable>
        </View>

        {/* Search bar */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "lightgray",
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginTop: 15,
            marginHorizontal: 10,
          }}
        >
          <TextInput
            placeholder="Search for items or more"
            placeholderTextColor="gray"
            style={{ fontSize: 18 }}
            cursorColor="#fd5c63"
          />
          <FontAwesome
            name="search"
            size={18}
            color="#fd5c63"
            style={{ marginLeft: "auto" }}
          />
        </View>

        {/* slider box */}

        <Carousel />

        {/* Services */}
        <Services />

        {/* Product details */}

        {product.map((product) => {
          return (
            <DressItems key={product.id} {...product} products={product} />
          );
        })}
      </ScrollView>

      {cart.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 10,
            marginHorizontal: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            transform: [
              cart.length > 0 ? { translateY: 0 } : { translateY: 100 },
            ],
            display: cart.length > 0 ? "block" : "none",
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 22, paddingBottom: 5 }}>
              {cart.length} items | {totalAmount}
            </Text>
            <Text style={{ color: "#fff" }}>Extra charges might apply</Text>
          </View>

          <Pressable onPress={() => navigation.navigate("Cart")}>
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "500",
                letterSpacing: 1.5,
              }}
            >
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
