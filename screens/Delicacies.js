import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";

const Delicacies = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const db = await SQLite.openDatabaseAsync("bicol_delicacies")
      const result = await db.getAllAsync(
        "SELECT * FROM delicacies"
      );
      setData(result);
    };
    fetchPost();
  }, [refresh,navigation]);




  if (data.length === 0) {
    return (
      <View>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, marginVertical:20, fontWeight:"800"}}>Delicacies</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.data}
            onPress={() =>
              navigation.navigate("Details", {
                id: item.delicacy_id,
              })
            }
          >
            <View style={styles.dataImage}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.dataDetails}>
              <Text style={styles.dataName}>{item.delicacyName}</Text>
              <Text style={styles.dataInfo}>Price: {item.price}</Text>
              <Text style={styles.dataInfo}>description: {item.description}</Text>
              <Text style={styles.dataInfo}>ratings: {item.ratings}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  data: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    zIndex: 1,
  },
  deleteIcon: {
    color: "red",
  },
  dataImage: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
  dataDetails: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  dataName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dataInfo: {
    fontSize: 14,
    color: "#555",
  },
});

export default Delicacies;




