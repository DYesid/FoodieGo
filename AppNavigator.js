import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login'; 
import Home from './screens/home';   
import Menu from './screens/menu';
import SignUp from './screens/signup';
import UserList from './screens/userlist';
import RecoverPassword from './screens/recoverpassword';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={{headerShown: false}}
            />
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{headerShown: false}}
            />
        <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="UserList"
            component={UserList}
            options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{headerShown: false}}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
