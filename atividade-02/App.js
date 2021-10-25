import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login  from './screens/Login';
import Create_Contact from './screens/Create_Contact';
import List_Contact from './screens/List_Contact';
import Create_User from './screens/Create_User';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Create_Contact" component={Create_Contact}/>
        <Stack.Screen name="List_Contact" component={List_Contact}/>
        <Stack.Screen name="Create_User" component={Create_User}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}