import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import { ImageItem } from '../components/ImageItem';
import { NoFavouritesMessage } from '../components/NoFavouritesMessage';

export const FavouritesListScreen = ({ navigation }) => {
  const favourites = useSelector(state => state.favourites.favourites);

  return (
    <View style={styles.favouritesWrapper}>
      {favourites.length 
      ? (<FlatList
        data={favourites}
        contentContainerStyle={{ padding: 10 }}
        style={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('ImageFullScreen', { img: item.img, title: item.title })}
          >
            <ImageItem
              img={item.img} 
              name={item.name}
              avatarImg={item.avatarImg}
              title={item.title}
            />
          </TouchableOpacity>
        )}
      />) 
      : (<NoFavouritesMessage />)}
      
    </View>
  );
};

const styles = StyleSheet.create({
  favouritesWrapper: {
    height: '100%',
  },

  flatListContainer: {
    display: 'flex',
    gap: 20,
  },
});