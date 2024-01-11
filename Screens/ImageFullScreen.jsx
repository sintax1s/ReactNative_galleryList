import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ImageFullScreen = ({ route, navigation }) => {
  const { img, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: title || 'No Description',
    })
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
  },
});
