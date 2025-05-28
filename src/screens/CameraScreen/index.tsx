import React, { useCallback,useEffect,useRef, useState } from "react"
import {View, TouchableOpacity, ActivityIndicator} from 'react-native'
import {styles} from './styles';
import { Camera, useCameraDevice} from "react-native-vision-camera";
import Geolocation from "@react-native-community/geolocation";
import { savePhoto, getLocation } from "../../services/storageServices";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

export default function CameraScreen(): React.JSX.Element{
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isCapturing, setIsCapturing] = useState(false);
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
  
  useEffect(() => {
    if (!isCapturing) return;
    const beforeRemoveListener = navigation.addListener('beforeRemove', (e) => {
      if (isCapturing) {
        e.preventDefault(); 
      }
    });
  
    return () => {
      beforeRemoveListener();
    };
  }, [isCapturing]);

  const takePhoto = async () =>{
    setIsCapturing(true);
    if(camera.current !== null){
      const location = await getLocation();
      const photo = await camera.current.takePhoto({});
      const savePath = await savePhoto(photo.path, location.latitude,location.longitude)
    } 
    setIsCapturing(false);
  }

  return(
    <View style={styles.container}>
      {device != null && (
        <>
          <Camera
            ref={camera}
            style={styles.cameraScreen}
            device={device}
            isActive={true}
            photo={true}
          />
          {isCapturing && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
        </>
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