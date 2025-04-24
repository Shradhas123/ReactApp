import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

import HomeScreen from '../screens/Home';
import DevicesScreen from '../screens/Devices';
import AlarmScreen from '../screens/Alarms';
// import SettingsScreen from '../screens/Settings';
import RoomsScreen from '../screens/Rooms';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Devices':
              iconName = 'bulb-outline';
              break;
            case 'Rooms':
                iconName = 'alert-circle-outline';
                break;
            case 'Alarm':
              iconName = 'alert-circle-outline';   
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
            case 'A':
              iconName = 'settinjgs-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0066FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Devices" component={DevicesScreen} />
      <Tab.Screen name="Rooms" component={RoomsScreen} />
      <Tab.Screen name="Alarm" component={AlarmScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
