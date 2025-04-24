import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import OtpScreen from '../screens/OtpScreen';
import AppNavigator from './AppNavigator'; 

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login">
            {(props: any) => <LoginScreen {...props} onLoginSuccess={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
        </>
      ) : (
        <Stack.Screen name="MainApp" component={AppNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
