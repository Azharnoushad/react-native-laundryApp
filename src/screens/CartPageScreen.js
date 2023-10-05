import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { decrementCount, incrementCount } from "../redux/CartSlice";
import {
  decrementCountProduct,
  incrementCountProduct,
} from "../redux/ProductSlice";

const CartPageScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const { params } = useRoute();
  const dispatch = useDispatch();
  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
  return (
    <>
      <ScrollView>
        {cart.length > 0 ? (
          <>
            <View style={{ padding: 20 }}>
              <Ionicons
                name="arrow-back-circle-sharp"
                size={30}
                color="#fd5c63"
                onPress={() => navigation.goBack()}
              />
              <Text style={{ color: "#fd5c63", fontSize: 26, marginTop: 20 }}>
                Your Bucket
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#fff",
                marginHorizontal: 15,
                padding: 20,
                borderRadius: 15,
                elevation: 10,
              }}
            >
              {cart.map((item) => {
                return (
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginVertical: 10,
                      }}
                      key={item.id}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          textTransform: "capitalize",
                          fontWeight: "500",
                          width: 80,
                        }}
                      >
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          borderWidth: 0.4,
                          borderRadius: 10,
                          width: 90,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "green",
                            fontSize: 28,
                            fontWeight: "bold",
                          }}
                          onPress={() => {
                            dispatch(decrementCount(item));
                            dispatch(decrementCountProduct(item));
                          }}
                        >
                          -
                        </Text>
                        <Text
                          style={{
                            color: "green",
                            fontSize: 20,
                            fontWeight: "bold",
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <Text
                          style={{
                            color: "green",
                            fontSize: 28,
                            fontWeight: "bold",
                          }}
                          onPress={() => {
                            dispatch(incrementCount(item));
                            dispatch(incrementCountProduct(item));
                          }}
                        >
                          +
                        </Text>
                      </View>
                      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                        ${item.price * item.quantity}
                      </Text>
                    </View>
                  </>
                );
              })}
            </Pressable>
            <Text
              style={{
                color: "#fd5c63",
                fontSize: 26,
                marginVertical: 20,
                marginHorizontal: 15,
              }}
            >
              Billing Details
            </Text>
            <View
              style={{
                backgroundColor: "#fff",
                marginHorizontal: 15,
                padding: 10,
                borderRadius: 15,
                elevation: 10,
                marginBottom: 10,
              }}
            >
              <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "gray" }}>
                    Item Total
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    $ {totalAmount}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "gray" }}>
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "600", color: "green" }}
                  >
                    FREE
                  </Text>
                </View>
                <Text style={{ fontSize: 18, color: "gray", marginBottom: 10 }}>
                  Free Dekivery on Your Order
                </Text>
              </View>

              <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "gray", marginVertical: 10 }}
                  >
                    Free Dekivery on Your Order
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "600", color: "green" }}
                  >
                    {params.date}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "gray", marginVertical: 10 }}
                  >
                    Number of days
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "600", color: "green" }}
                  >
                    {params.deliveryTime}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "gray", marginVertical: 10 }}
                  >
                    Selected Pick Up Time
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "600", color: "green" }}
                  >
                    {params.selectedTime}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    color: "black",
                    marginVertical: 10,
                    fontWeight: "bold",
                  }}
                >
                  To Pay
                </Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "900", color: "green" }}
                >
                  ${totalAmount}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginTop: 40 }}>Your cart is empty</Text>
          </View>
        )}
      </ScrollView>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          backgroundColor: "#fff",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              color: "black",
              fontWeight: "bold",
            }}
          >
            ${totalAmount}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "green" }}>
            View Detailed Bill
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#307a74",
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "900", color: "#fff" }}>
            Place Order
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default CartPageScreen;

const styles = StyleSheet.create({});
