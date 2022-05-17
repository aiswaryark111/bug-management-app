import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/home';
import Profile from '../screens/profile/profile';
import ResolvedBugs from '../screens/resolvedBugs/resolvedBugs';
import UnresolvedBugs from '../screens/unresolvedBugs/unresolvedBugs';
import React from 'react';
import CreateBug from '../screens/createBugs/createBugs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home-outline"
            }
            else if (route.name === "Unresolved") {
              iconName = "bug-outline"
            }
            else if (route.name === "Create") {
              iconName = "plus-circle"
            }
            else if (route.name === "Resolved") {
              iconName = "bug-check-outline"
            }
            else {
              iconName = "account"
            }
            return <MaterialCommunityIcons name={iconName} size={25} color="#ffff" />;
          }
        })} >
        <Tab.Screen name="Home" component={Home} options={{ tabBarColor: "#FB5648" }} />
        <Tab.Screen name="Unresolved" component={UnresolvedBugs} options={{ tabBarColor: "#AC37EA" }} />
        <Tab.Screen name="Create" component={CreateBug} options={{ tabBarColor: "#2DBAB6" }} />
        <Tab.Screen name="Resolved" component={ResolvedBugs} options={{ tabBarColor: "#7CBA2D" }} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarColor: "#2D87B8" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
