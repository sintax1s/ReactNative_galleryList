import React, { useEffect, memo } from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  View, 
  Text, 
  RefreshControl, 
  Button, 
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loader } from '../components/Loader';
import { getImages, handleNextPage, handlePrevPage } from '../store/imageSlice';
import { ImageItem } from '../components/ImageItem';

export const ImageList = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const { images, page, status } = useSelector(state => state.images);

  useEffect(() => {
    dispatch(getImages(page));
  }, [page]);

  const handleRefresh = () => {
    if (status !== 'loading') {
      dispatch(handleNextPage(1));
    }
  };

  return (
    <View style={{ height: '100%' }}>
      {status === 'loading' && ( <Loader />)}
      {status === 'rejected' && Alert.alert('Oops', 'Something went wrong, probably something with server, reload and try again')}
      {status === 'resolved' && (
        <FlatList
          refreshControl={
            <RefreshControl 
              refreshing={status === 'loading'} 
              onRefresh={handleRefresh} 
            />
          }
          data={images}
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ImageFullScreen', { img: item.urls.regular, title: item.description })}>
              <ImageItem img={item.urls.regular} name={item.user.name} avatarImg={item.user.profile_image.medium} title={item.description} />
            </TouchableOpacity>
          )}
        />
      )}
      <View style={styles.navBarContainer}>
        <View style={styles.paginationContainer}>
          <Button title="Previous Page" onPress={() => dispatch(handlePrevPage(page - 1))} disabled={page === 1} />
          <Text>{`${page}`}</Text>
          <Button title="Next Page" onPress={() => dispatch(handleNextPage(page + 1))} />
        </View>
        <Icon.Button name="heart" backgroundColor="#be2c51" onPress={() => navigation.navigate('FavouritesListScreen')}>
          Favourites
        </Icon.Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  flatListContainer: {
    display: 'flex',
    gap: 20,
  },

  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});


