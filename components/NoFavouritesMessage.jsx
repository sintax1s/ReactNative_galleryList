import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const NoFavouritesMessage = () => {
  return (
    <View style={styles.container}>
      <Icon name="frown-o" style={{fontSize: 50}}/>
      <Text>You don't have any pictures you like</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});