import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import GalleryScreen from "./screens/GalleryScreen";
import CameraScreen from "./screens/CameraScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator():React.JSX.Element{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Galeria" component={GalleryScreen} options={{
                                                                                title: 'Galeria',
                                                                                headerStyle: {
                                                                                backgroundColor: '#F26868',
                                                                                },
                                                                                headerTintColor: 'white',
                                                                                headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                                },
                                                                            }}/>




                <Stack.Screen name="Camera" component={CameraScreen} options={{
                                                                                title: 'Camera',
                                                                                headerStyle: {
                                                                                backgroundColor: '#F26868',
                                                                                },
                                                                                headerTintColor: 'white',
                                                                                headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                                },
                                                                            }}/>
                <Stack.Screen name="Detalhes" component={DetailScreen} options={{
                                                                                title: 'Detalhes',
                                                                                headerStyle: {
                                                                                backgroundColor: '#F26868',
                                                                                },
                                                                                headerTintColor: 'white',
                                                                                headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                                },
                                                                            }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}