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
                <Stack.Screen name="Camera" component={CameraScreen}/>
                <Stack.Screen name="Gallery" component={GalleryScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}