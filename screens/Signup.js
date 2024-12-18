import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import signupUser from '../db/signupUser';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async () => {
    try{
      const result = await signupUser(name,email,password)
      if(result){
        navigation.navigate("Login")
      }
    }catch(error){
      console.log(error)
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.SignupContainer}>
      <Image
        source={{ uri: 'https://img.freepik.com/premium-photo/bicol-express-typical-filipino-food-illustration_659858-914.jpg' }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
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

      <TouchableOpacity style={styles.SignupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>-OR-</Text>

      <TouchableOpacity style={styles.signuplink} onPress={() => navigation.navigate("Login")}>
        <Text> Don you have an account </Text>
        <Text style={{ color: "blue" }}> Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  SignupContainer: {
    flexGrow: 1,
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
  SignupButton: {
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

export default Signup;