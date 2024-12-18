
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as SQLite from 'expo-sqlite'
import AsyncStorage from '@react-native-async-storage/async-storage'


const getUserID = async () => {
    try{
        const user_id = await AsyncStorage.getItem("id")
        return Number(user_id)
    }catch(error){
        console.log(error)
    }
}

const saveEmergency = async (nameOfService,address,hotline,typeOfService,image) => {
    try {
        const user_id = await getUserID();
        const db = await SQLite.openDatabaseAsync("emergencyFinder")
        await db.runAsync("INSERT INTO saveEmergency(nameOfService,address,hotline,typeOfService,image,user_id) VALUES (?,?,?,?,?,?)", [nameOfService,address,hotline,typeOfService,image, user_id]);
        Alert.alert("Saved emergency!!");
        return true;
    } catch (error) {
        console.error("Error saving emergency:", error.message);
        Alert.alert("Error saving emergency", error.message);
    }
}

export default saveEmergency

const styles = StyleSheet.create({})