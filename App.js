// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListView from './screens/ListView';
import DetailView from './screens/DetailView';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ListView"
        component={ListView}
        options={{title: 'User List'}}
      />
      <Stack.Screen name="DetailView" component={DetailView} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
