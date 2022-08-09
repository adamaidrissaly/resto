import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDatail from "./screens/RestaurantDatail";

import {Provider as ReduxProvider} from 'react-redux'
import store from "./redux/store";


export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDatail" component={RestaurantDatail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
