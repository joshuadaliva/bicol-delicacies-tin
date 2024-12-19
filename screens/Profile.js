import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Alert,
  Button,
  Modal,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";

const Profile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const getUsername = async () => {
      const name = await AsyncStorage.getItem("name");
      if (!name) {
        navigation.navigate("Login");
      }
      const email = await AsyncStorage.getItem("email");
      setName(name);
      setEmail(email);
    };
    getUsername();
  }, [navigation,refresh,email]);


  const signOut = async () => {
    try {
      AsyncStorage.setItem("id", "");
      AsyncStorage.setItem("name", "");
      AsyncStorage.setItem("email", "");
      AsyncStorage.setItem("image", "");
      AsyncStorage.setItem("loginStatus", "false");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("bicol_delicacies");
    const user_id = Number(await AsyncStorage.getItem("id"));
    const existingUser  = await db.getFirstAsync("SELECT * FROM users WHERE email = ?", [input1]);
    
    if (existingUser ) {
      Alert.alert("Please use another email");
      return false;
    }

    const result = await db.runAsync(
      "UPDATE users SET name = ?, email = ? WHERE user_id =? ",
      [input1, input2, user_id]
    );

    if (result.changes > 0) {
      Alert.alert("Profile updated!!");
      await AsyncStorage.setItem("name", input1);
      await AsyncStorage.setItem("email", input2);
      setName(input1);
      setEmail(input2);
      
      setModalVisible(false);
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <ScrollView style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Ente full name"
              value={input1}
              onChangeText={setInput1}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={input2}
              onChangeText={setInput2}
            />

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                updateProfile();
                setModalVisible(false);
                setRefresh(!refresh)

              }}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity
              title="Close"
              color="red"
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 10 }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.header}>Your Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>User Information</Text>

        <Text
          style={styles.input}
        >
          Name: {name}
        </Text>
        <Text
          style={styles.input}
        >
         Email: {email}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutbtn]}
        onPress={signOut}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 29,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 40,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 15,
    color: "#555",
    marginTop: 30,
    margin: 10,
  },
  logoutbtn: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
