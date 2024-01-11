import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const NoFavouritesMessage = () => {
  return (
    <View style={styles.container}>
      <Icon name="frown-o" style={styles.icon}/>
      <Text>You don't have any pictures that you like</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 50,
  }
});