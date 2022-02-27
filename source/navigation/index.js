import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from '../screens/menu';
import GameBoard from '../screens/gameBoard';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="GameBoard" component={GameBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
