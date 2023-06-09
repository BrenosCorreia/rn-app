import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/Pages/Home';
import Contato from './src/Pages/Contato';
import Baixo from './src/Pages/Baixo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Marvin Guitars') {
              iconName = 'home';
            } else if (route.name === 'ContraBaixos') {
              iconName = 'musical-notes';
            } else if (route.name === 'Contato') {
              iconName = 'call';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Marvin Guitars" component={Home} />
        <Tab.Screen name="ContraBaixos" component={Baixo} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;





