import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import { AvenirNextCondesed, backgroundColor } from "./util/Constants";

const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      {/* /<Stack.Navigator screenOptions={{headerTitle:(props)=><Title></Title>,}} > */}
      <Stack.Navigator
        screenOptions={{
          headerTitle: "24I-Films",
          headerTitleStyle: {
            color: "white",
            fontFamily: AvenirNextCondesed,
            fontSize: 30,
          },
          headerStyle: {
            backgroundColor: backgroundColor,
            elevation: 0,
            shadowColor: 'transparent',
          },
          headerBackTitleVisible:false,
          
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
