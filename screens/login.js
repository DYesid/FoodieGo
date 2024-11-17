import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image, Alert } from 'react-native';
import GestorUsuarios from '../models/gestorUsuario';

const gestorUsuarios = new GestorUsuarios();

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(gestorUsuarios.VerficarUsuario(email, password)){
      setEmail("");
      setPassword("");
      navigation.navigate('Menu'); 
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  const handleRecorverpassword = () => {
    navigation.navigate('RecoverPassword')
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

      <View style={styles.formContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabTextActive}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taboff} onPress={handleSignup}>
            <Text style={styles.tabText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.welcomeText}>Welcome to FoodieGo</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword} onPress={handleRecorverpassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


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
  loginButton: {
    backgroundColor: 'red',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
