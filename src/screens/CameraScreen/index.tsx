import React, { useCallback, useEffect, useRef, useState } from "react"
import {View, TouchableOpacity, Button, Text, Linking} from 'react-native'
import {styles} from './styles';
import { Camera, useCameraDevice} from "react-native-vision-camera";
import Geolocation from "@react-native-community/geolocation";

import { savePhoto, getLocation } from "../../services/storageServices";
import { ParamListBase, useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function CameraScreen(): React.JSX.Element{
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back');


  useFocusEffect(
    useCallback( () => {
      async function getPermissions(){
        const newCameraPermission = await Camera.requestCameraPermission();
        const newLocationPermission = await Geolocation.requestAuthorization();
      }
      getPermissions();
    }, [])
  );
  

  const takePhoto = async () =>{
    if(camera.current !== null){
      const location = await getLocation();
      const photo = await camera.current.takePhoto({});
      const savePath = await savePhoto(photo.path, location.latitude,location.longitude)
    } 
  }

  return(
    <View style={styles.container}>
      {device != null && (
          <Camera
              ref={camera}
              style={styles.cameraScreen}
              device={device}
              isActive={true}
              photo={true}
          />
      )}

      <View style={styles.base}>
          <TouchableOpacity 
          style={styles.btnTakePhoto}
          onPress={takePhoto}>
            <View style={styles.btnArea}></View>
          </TouchableOpacity>
      </View>
    </View>
  )
}