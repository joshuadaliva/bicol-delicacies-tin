
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as SQLite from 'expo-sqlite'


const validateEmail = (email) => {
    const checkEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return checkEmail.test(email);
  };

const signupUser = async (name,email,password) => {
    try{
        if(!name || !email || !password){
            Alert.alert("provide all fields")
            return false;
        }
        if (!validateEmail(email)) {
            Alert.alert("Please enter a valid email")
            return false;
        }
        const db = await SQLite.openDatabaseAsync("bicol_delicacies")
        const existingUser  = await db.getFirstAsync("SELECT * FROM users WHERE email = ?", [email]);
        if (existingUser) {
            Alert.alert("Please use another email");
            return false;
        }
        await db.runAsync("INSERT INTO users(name, email,password) VALUES (?,?,?)", [name, email, password])
        Alert.alert("user created")
        return true;
    }catch(error){
        console.log(error.message)
    }
}

export default signupUser

const styles = StyleSheet.create({})