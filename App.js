import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './screens/HomeScreen';
import ReportsScreen from './screens/ReportsScreen.js';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Ana Sayfa" 
          component={HomeScreen} 
        
        />
        <Tab.Screen 
          name="Raporlar" 
          component={ReportsScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}