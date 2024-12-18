import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Delicacies')}>
        <Text style={styles.boxTitle}>Bicolano Delicacies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Restaurants')}>
        <Text style={styles.boxTitle}>Restaurants List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'black',
    padding: 30,
    borderRadius: 10,
    marginVertical: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
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
  menuButton: {
    position: 'absolute',
    top: 50,
    right: 60,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  accountButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default HomePage;
