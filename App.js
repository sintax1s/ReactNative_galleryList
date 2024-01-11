import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from './Screens/Navigation';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
