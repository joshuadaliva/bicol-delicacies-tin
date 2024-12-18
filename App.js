import React, { useState , useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Delicacies from './screens/Delicacies';
import Restaurants from './screens/Restaurants';
import Login from  './screens/Login'
import Signup from './screens/Signup'
import initDB from './db/initDB';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabs from './screens/BottomTabs';
import DelicacyDetails from './screens/DelicacyDetails';

const Stack = createStackNavigator();

const App = () => {

  const [isLogin, setIsLogin] = useState(null)

  useEffect(() => {
    const checkIslogin = async () => {
      const loginStatus = await AsyncStorage.getItem("loginStatus")
      console.log("loginStatus: ", loginStatus)
      if(loginStatus === "true"){
        setIsLogin(true)
      }
      else{
        setIsLogin(false)
      }
    }
    checkIslogin()
  },[])

  useEffect(() => {
    const initializeDB = async () => {
      const result = await initDB()
      console.log(result)
    }
    initializeDB()
  },[])


  if (isLogin === null) {
    return (
      <ActivityIndicator color={"blue"}/>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogin ? "Tabs" : "Signup"}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Delicacies"
              component={Delicacies}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Restaurants"
              component={Restaurants}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={DelicacyDetails}
              options={{ headerShown: false }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
