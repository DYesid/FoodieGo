import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {

  // Función que maneja la navegación al presionar el botón
  /*const handleLoginPress = () => {
    navigation.navigate('Login'); // Cambia 'Home' por 'Login' para navegar correctamente
  };*/

  const handleSignupPress = () => {
    navigation.navigate('SignUp')
  };

  const handleUserlistPress = () => {
    navigation.navigate('Login')
  }

  return (
    <ImageBackground
      source={require('../assets/background.png')} // Cambia la ruta según la ubicación real del archivo
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleUserlistPress}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signUpText}>
            Don't have an account? 
          </Text>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
              <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
      marginBottom: 200,
    },
    logo: {
      width: 120, // Corregido el typo 'with' a 'width'
      height: 120,
    },
    buttonContainer: {
      alignItems: 'center',
      marginBottom: 80,
    },
    loginButton: {
      backgroundColor: 'red',
      paddingVertical: 12,
      paddingHorizontal: 70,
      borderRadius: 25,
      marginBottom: 30,
    },
    loginText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    },
    signUpText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center', 
      flexDirection: 'row', 
    },
    signUpLink: {
      color: 'red',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    signupButton: {
      paddingHorizontal: 5, 
    },
    signupContainer: {
      flexDirection: 'row',
    }
  });
  