import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadings, setLoadings] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setLoadings(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoadings(false);
      }
      if (authUser) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
    });
  };
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        marginTop: 100,
      }}
    >
      {
        loadings ? (
          <View style={{alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" color="red"/>
          </View>
        ) : (
          <>
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
        onPress={loginHandler}
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
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={{ fontSize: 20, fontWeight: "800", opacity: 0.5 }}>
          Dont't have an accoun? Sign up
        </Text>
      </Pressable>
          </>
        )
      }
     
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
