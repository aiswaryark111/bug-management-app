import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/home';
import Profile from '../screens/profile/profile';
import ResolvedBugs from '../screens/resolvedBugs/resolvedBugs';
import UnresolvedBugs from '../screens/unresolvedBugs/unresolvedBugs';
import React from 'react';
import CreateBug from '../screens/createBugs/createBugs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../themes/colors';

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
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
                color={COLORS.primary}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarColor: COLORS.tabColor1}}
        />
        <Tab.Screen
          name="Unresolved"
          component={UnresolvedBugs}
          options={{tabBarColor: COLORS.tabColor2}}
        />
        <Tab.Screen
          name="Create"
          component={CreateBug}
          options={{tabBarColor: COLORS.tabColor3}}
        />
        <Tab.Screen
          name="Resolved"
          component={ResolvedBugs}
          options={{tabBarColor: COLORS.tabColor4}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{tabBarColor: COLORS.tabColor5}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
