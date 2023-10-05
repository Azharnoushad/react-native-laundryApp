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
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const RegisterScreen = () => {
    const navigation = useNavigation()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
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
        Register
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "700", paddingVertical: 10 }}>
        Create a new account
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
          value={email}
          onChangeText={(text)=>setEmail(text)}
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            flex: 1,
            fontSize: 20,
          }}
          cursorColor="black"
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
          value={password}
          onChangeText={(text)=>setPassword(text)}
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            flex: 1,
            fontSize: 20,
          }}
          cursorColor="black"
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
       <MaterialCommunityIcons name="phone-outline" size={24} color="black" />
        <TextInput
          placeholder="Phone No"
          value={phone}
          onChangeText={(text)=>setPhone(text)}
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            flex: 1,
            fontSize: 20,
          }}
          cursorColor="black"
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
          Register
        </Text>
      </TouchableOpacity>
      <Pressable onPress={()=>navigation.goBack()}>
        <Text style={{ fontSize: 20, fontWeight: "800", opacity: 0.5 }}>
          Already have a account? Sign up
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
