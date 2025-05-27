import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Home" component={() => <View></View>} />
      <Drawer.Screen name="Settings" component={() => <View></View>} />
    </Drawer.Navigator>
  );
}