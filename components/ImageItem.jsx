import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addToFavourites, removeFromFavourites } from '../store/favouriteSlice';

export const ImageItem = ({ img, title, avatarImg, name}) => {
  const favourites = useSelector(state => state.favourites.favourites)
  const dispatch = useDispatch()

  const isIncludesInFavourites = favourites.some(favourite => favourite.img === img)

  return (
    <View style={styles.imageItem}>
      <Image source={{uri: img}} style={styles.mainImage}/>
        <Text style={styles.descriptionText}>{title || 'No description'}</Text>
        <View style={styles.avatarView}>
          <Image source={ { uri: avatarImg}} style={styles.avatar}/>
          <Text style={styles.avatarName}>{name}</Text>
          <View style={styles.favouritesWrapper}>
            <Icon.Button name='heart' backgroundColor="#be2c51" onPress={() => {
              if (!favourites.some(item => item.img === img)) {
                dispatch(addToFavourites({ img, title, avatarImg, name}))
              } else {
                dispatch(removeFromFavourites({ img }))
              }
              }}
            >
            {isIncludesInFavourites ? 'Remove' : 'Add'}
            </Icon.Button>
          </View>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  imageItem: {
    width: '100%',
    paddingBottom: 10,
    display: 'flex',
    marginBottom: 20,
    padding: 10,
    gap: 10,
    borderRadius: 15,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor : "#ebecf0"
  },

  mainImage: {
    height: 400,
  },

  avatarView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  descriptionText: {
    fontSize: 18, 
    fontWeight: 'bold',
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  avatarName: {
    fontSize: 18,
  },

  favouritesWrapper: {
    marginLeft: 'auto',
  }
});