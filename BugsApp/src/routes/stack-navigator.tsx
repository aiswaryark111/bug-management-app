import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateBug from '../screens/createBugs/createBugs';
import Home from '../screens/home/home';
import Profile from '../screens/profile/profile';
import ResolvedBugs from '../screens/resolvedBugs/resolvedBugs';
import UnresolvedBugs from '../screens/unresolvedBugs/unresolvedBugs';
import {COLORS} from '../themes/colors';
export const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recent Bugs"
        component={Home}
        options={{
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export const UnresolvedStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Unresolved Bugs"
        component={UnresolvedBugs}
        options={{
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export const CreateStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create Bug"
        component={CreateBug}
        options={{
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export const ResolvedStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Resolved Bugs"
        component={ResolvedBugs}
        options={{
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
