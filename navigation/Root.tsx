import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './Auth';
import Home from './Home';
import Alarm from './Alarm';
import Item from './Item';


const Nav = createNativeStackNavigator();

function Root() {
  return (
    <Nav.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="Auth" component={Auth} />
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="Alarm" component={Alarm} />
      <Nav.Screen name="Item" component={Item} />
    </Nav.Navigator>
  );
}

export default Root;
