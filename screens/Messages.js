import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert , TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";


const Message = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetchMessages();
  }, [navigation, refresh]);

  const fetchMessages = async  () => {
    try{
      const db = await SQLite.openDatabaseAsync("bicol_delicacies")
      const user_id = await AsyncStorage.getItem("id")
      const result = await db.getAllAsync("SELECT * FROM messages WHERE user_id = ?", [Number(user_id)])
      setMessages(result)
    }catch(error){
      console.log(error)
    }
  };

  const insertMessage = async () => {
    if (newMessage.trim() === '') return;
    try{
      const db = await SQLite.openDatabaseAsync("bicol_delicacies")
      const user_id = await AsyncStorage.getItem("id")
      const name = await AsyncStorage.getItem("name")
      const result = await db.runAsync("INSERT INTO messages(name,message,user_id) VALUES(?,?,?)", [name,newMessage,Number(user_id)])
      console.log(result)
      setRefresh(!refresh)
    }catch(error){
      console.log(error)
    }
  };


  const deleteSave = async (id) => {
    try{
      const db = await SQLite.openDatabaseAsync("bicol_delicacies")
      const result = await db.runAsync("DELETE FROM messages WHERE message_id = ?", [id])
      Alert.alert("deleted successfully")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={{backgroundColor:"lightblue",margin:2, width:"60%", borderRadius:10}}>
            <Text style={styles.message}>{item.name}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                Alert.alert(
                  "delete Message?",
                  "do you want to delete this message?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => {
                        console.log("you canceled delete");
                      },
                    },
                    {
                      text: "delete",
                      onPress: () => {
                        deleteSave(item.message_id);
                        setRefresh(!refresh);
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Ionicons
                name="trash-outline"
                size={20}
                color="red"
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Type your message"
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <Button title="Submit" onPress={insertMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 100,
  },
});

export default Message;