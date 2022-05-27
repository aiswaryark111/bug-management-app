import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../themes/colors';
import {
  CreateStackNavigator,
  HomeStackNavigator,
  ProfileStackNavigator,
  ResolvedStackNavigator,
  UnresolvedStackNavigator,
} from './stack-navigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Unresolved') {
              iconName = 'bug-outline';
            } else if (route.name === 'Create') {
              iconName = 'plus-circle';
            } else if (route.name === 'Resolved') {
              iconName = 'bug-check-outline';
            } else {
              iconName = 'account';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={25}
                color={focused ? COLORS.white : COLORS.tabBarIcon}
              />
            );
          },
        })}>
        <Tab.Group screenOptions={{tabBarColor: COLORS.primary}}>
          <Tab.Screen name="Home" component={HomeStackNavigator} />
          <Tab.Screen name="Unresolved" component={UnresolvedStackNavigator} />
          <Tab.Screen name="Create" component={CreateStackNavigator} />
          <Tab.Screen name="Resolved" component={ResolvedStackNavigator} />
          <Tab.Screen name="Account" component={ProfileStackNavigator} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigation;
