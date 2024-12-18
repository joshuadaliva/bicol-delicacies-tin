import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import * as SQLite from "expo-sqlite";

const DelicacyDetails = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const { id} = route.params;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const db = await SQLite.openDatabaseAsync("bicol_delicacies");
        const result = await db.getFirstAsync(
          "SELECT * FROM delicacies WHERE delicacy_id = ? ",
          [id]
        );
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [navigation, id]);

  if (data.length === 0) {
    return (
      <View>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{flexGrow:1}}>
        <Image
          style={styles.imageCarousel}
          source={{
            uri: data.image,
          }}
        />
        <Text style={styles.myText}>{data.delicacyName}</Text>
        <Text>Price: {data.price}</Text>
        <Text>Ratings : {data.ratings}</Text>
        <Text>Location : {data.location}</Text>
        <Text>description : {data.description}</Text>
        <Text style={{ fontSize: 15 }}>
          ingredients : {"\n"} {data.ingredients}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingVertical:70
  },
  header: { 
    fontSize: 29, 
    fontWeight: "bold", 
    paddingBottom: 20 
  },
  imageCarousel: { 
    width: "100%",
     height: 200, 
     marginBottom: 20 
    },
  myText: 
  { fontSize: 18, 
    fontWeight: "bold", 
    marginVertical: 5 
  },
  button: {
    padding: 10,
    backgroundColor: "pink",
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: { 
    color: "black", 
    fontSize: 16, 
    textAlign: "center" 
  },
});

export default DelicacyDetails;
