import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const DressItems = ({ id, image, name, quantity, price }) => {
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

      <Pressable
        style={{
          borderWidth: 1,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 5,
          borderColor: "gray",
        }}
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
    </View>
  );
};

export default DressItems;

const styles = StyleSheet.create({});
