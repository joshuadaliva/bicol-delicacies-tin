import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Restaurants = ({ navigation }) => {
  const restaurants = [
    'Red Platter',
    'Geewan',
    'Biggs Diner',
    'Green Earth Cafe',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>
      <View style={styles.delicaciesContainer}>
        {restaurants.map((restaurant, index) => (
          <TouchableOpacity key={index} style={styles.foodButton}>
            <Text style={styles.foodButtonText}>{restaurant}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom:100
  },
  foodButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  foodButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
    backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  delicaciesContainer:{
    width:"90%",
    alignItems:"center",
  }
});

export default Restaurants;

