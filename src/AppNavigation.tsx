import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GalleryScreen from "./screens/GalleryScreen";
import CameraScreen from "./screens/CameraScreen";

const Stack = createNativeStackNavigator();

export default function Navigator():React.JSX.Element{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Camera" component={CameraScreen}/>
                <Stack.Screen name="Gallery" component={GalleryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}