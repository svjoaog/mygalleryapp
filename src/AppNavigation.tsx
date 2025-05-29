import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import GalleryScreen from "./screens/GalleryScreen";
import CameraScreen from "./screens/CameraScreen";
import DetailScreen from "./screens/DetailScreen";
import { Image } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator():React.JSX.Element{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Galeria" component={GalleryScreen} options={headerStyles('Galeria')}/>
                <Stack.Screen name="Camera" component={CameraScreen} options={headerStyles('Camera')}/>
                <Stack.Screen name="Detalhes" component={DetailScreen} options={headerStyles('Detalhes')}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const headerStyles = (title: string): NativeStackNavigationOptions => ({
    title,
    headerStyle: {
      backgroundColor: '#F26868',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: title === 'Galeria'
      ? () => (
            <Image
              source={require('./assets/images/galeria.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
        )
      : undefined
});