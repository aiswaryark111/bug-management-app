import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateBug from '../screens/createBugs/createBugs';
import Home from '../screens/home/home';
import Login from '../screens/Login/login';
import Profile from '../screens/profile/profile';
import ResolvedBugs from '../screens/resolvedBugs/resolvedBugs';
import SignUp from '../screens/signUp/signUp';
import UnresolvedBugs from '../screens/unresolvedBugs/unresolvedBugs';
import {COLORS} from '../themes/colors';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const HomeStackNavigator = () => {
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
