import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        marginTop: 100,
      }}
    >
      <Text
        style={{
          color: "purple",
          fontSize: 30,
          fontWeight: "700",
        }}
      >
        Sign In
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "700", paddingVertical: 10 }}>
        Sign in to your account
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginTop: 30,
        }}
      >
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <TextInput
          placeholder="Email"
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            flex: 1,
            fontSize: 20,
          }}
          cursorColor="black"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginTop: 30,
        }}
      >
        <Ionicons name="key-outline" size={24} color="black" />
        <TextInput
          placeholder="Password"
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            flex: 1,
            fontSize: 20,
          }}
          cursorColor="black"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
      activeOpacity={0.8}
        style={{
          backgroundColor: "#115ba0",
          width: 170,
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderRadius: 15,
          marginVertical: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            letterSpacing: 2.5,
            fontWeight: "700",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Pressable onPress={()=>navigation.navigate("Register")}>
        <Text style={{ fontSize: 20, fontWeight: "800", opacity: 0.5 }}>
          Dont't have an accoun? Sign up
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
