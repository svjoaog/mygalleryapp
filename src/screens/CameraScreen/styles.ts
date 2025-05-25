import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    cameraScreen:{
        flex: 1
    },
    base:{
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTakePhoto:{
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        borderRadius: 150,
        margin: 20
    },
    btnArea:{
        height: 35,
        width: 35,
        backgroundColor: 'red',
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
})