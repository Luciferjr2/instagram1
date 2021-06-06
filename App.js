/* eslint-disable no-unused-vars */
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native'
import firebase from 'firebase'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYlxOyDxugBgqJxHPRDPnqahGhTYxXgGo",
  authDomain: "instagram-dev-a5d0c.firebaseapp.com",
  projectId: "instagram-dev-a5d0c",
  storageBucket: "instagram-dev-a5d0c.appspot.com",
  messagingSenderId: "568599124970",
  appId: "1:568599124970:web:f9542ccc41e78387f5f093",
  measurementId: "G-H80E2MS1JF"
};

if(firebase.apps.length === 0) {
    firebase.initializeApp({});
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};