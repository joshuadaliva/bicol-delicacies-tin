import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from './HomePage'
import { Ionicons } from "@expo/vector-icons";
import Messages from './Messages'
import Profile from "./Profile";


const Tab = createBottomTabNavigator();
const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Homes"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Homes") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Messages") {
          iconName = focused ? "cloud" : "cloud-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: "lightgreen",
        borderTopWidth: 0.5,
        elevation: 5,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        padding: 5,
      },
    })}
  >
    <Tab.Screen
      name="Homes"
      component={HomePage}
      options={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}
    />
    <Tab.Screen
      name="Messages"
      component={Messages}
      options={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
