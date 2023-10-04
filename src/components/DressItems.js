import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../redux/CartSlice";
import { AntDesign } from "@expo/vector-icons";

const DressItems = ({ id, image, name, quantity, price, products }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const productCount = cart.find((item) => item.id === id)?.quantity;

  const addToCart = () => {
    dispatch(addTocart(products));
  };

  const isInCart = (_id) => {
    return !!cart.find((item) => item.id === _id);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginBottom: 20,
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 2,
      }}
    >
      <View>
        <Image source={{ uri: image }} style={{ width: 70, height: 70 }} />
      </View>

      <View>
        <Text
          style={{
            width: 83,
            fontSize: 22,
            fontWeight: "500",
            marginBottom: 5,
            textTransform: "capitalize",
          }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 18, width: 60 }}>${price}</Text>
      </View>

      {isInCart(id) ? (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable>
            <AntDesign name="minuscircleo" size={20} color="black" />
          </Pressable>
          <View>
            <Text
              style={{ color: "#fd5c63", fontSize: 26, fontWeight: "bold" }}
            >
              {productCount}
            </Text>
          </View>
          <Pressable>
            <AntDesign name="pluscircleo" size={20} color="black" />
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={{
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 5,
            borderColor: "gray",
          }}
          onPress={addToCart}
        >
          <Text
            style={{
              color: "green",
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Add
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default DressItems;

const styles = StyleSheet.create({});
