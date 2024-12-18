import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Text>Hi Customer!!!</Text>
      </View>
      <View style={styles.messageContainer}>
        <TextInput placeholder='enter a message' style={styles.input}/>
        <TouchableOpacity style={styles.btn}>
            <Text style={{color:"white"}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:20
  },
  messageContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  btn:{
    margin:2,
    backgroundColor:"black",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10
  },
  input:{
    borderWidth:2,
    borderColor:"gray",
    width:"80%"
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default Messages;
