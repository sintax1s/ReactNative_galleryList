import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ImageList } from "./ImageListScreen";
import { ImageFullScreen } from "./ImageFullScreen";
import { FavouritesListScreen } from "./FavouritesListScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ImageListScreen" 
          component={ImageList}
          options={{ title: "Pinterest"}}
        />
        <Stack.Screen 
          name="ImageFullScreen" 
          component={ImageFullScreen}
          options={{ title: "Что-то"}}
        />
        <Stack.Screen 
          name="FavouritesListScreen" 
          component={FavouritesListScreen}
          options={{ title: "Favourites"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}