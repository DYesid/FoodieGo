import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import GestorUsuarios from "../models/gestorUsuario";

const gestorUsuarios = new GestorUsuarios();


export default function SignUp ({navigation})  {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    gestorUsuarios.NuevoUsuario(name, email, password);
    navigation.navigate('Login')
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.taboff} onPress={handleLogin}>
            <Text style={styles.tabText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabTextActive}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.welcomeText}>Welcome to FoodieGo</Text>
        
        <TextInput
          style={styles.input}
          placeholder="name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.SignupButton} onPress={handleRegister}>
          <Text style={styles.SignupText}>Sign Up</Text>
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
    marginBottom: 90,
  },
  tabContainer: {
    backgroundColor: '#8C0B2E',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#F60030',
    borderRadius: 25
  },
  taboff: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  tabTextActive: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
