import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite'
import loginUser from '../db/loginUser';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  async () => {
    try{
      const result = await loginUser(email,password)
      if(result){
        navigation.navigate("Tabs")
      }
    }catch(error){
      console.log(error)
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        source={{ uri: 'https://img.freepik.com/premium-photo/bicol-express-typical-filipino-food-illustration_659858-914.jpg' }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>-OR-</Text>

      <TouchableOpacity style={styles.signuplink} onPress={() => navigation.navigate("Signup")}>
        <Text> Don't you have an Account </Text>
        <Text style={{color:"blue"}}> Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 250,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  signuplink: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
