import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import GestorUsuarios from "../models/gestorUsuario";

const gestorUsuarios = new GestorUsuarios();


export default function SignUp ({navigation})  {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    if (gestorUsuarios.VerficarEmail(email)){
        setEmail("")
        Alert.alert('We have sent a recovery link to your email.');
        navigation.navigate('Login');
    } else {
        Alert.alert('The entered email is not registered.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      
      <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
      </View>

      < View style={styles.formContainer}>

        <Text style={styles.TittleText}>
            Password Recovery
        </Text>
        
        <Text style={styles.BodyText}>
            Please enter the user's email address:
        </Text>
        
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.SignupButton} onPress={handleRecover}>
            <Text style={styles.SignupText}>
                Recover
            </Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  logo: {
    width: 120,
    height: 120,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 40,
    marginBottom: 150,
  },
  TittleText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  BodyText: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  SignupButton: {
    backgroundColor: 'red',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  SignupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
});
