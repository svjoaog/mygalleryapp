import React, { useEffect, useRef } from "react"
import {View, TouchableOpacity, Button} from 'react-native'
import {styles} from './styles';
import { Camera, useCameraDevice} from "react-native-vision-camera";
import Geolocation from "@react-native-community/geolocation";

import { savePhoto, getLocation } from "../../services/storageServices";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function CameraScreen(): React.JSX.Element{
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back');

  useEffect( () => {
    async function getPermission(){
      const newCameraPermission = await Camera.requestCameraPermission();
    }
    getPermission();
  }, []);

  const takePhoto = async () =>{
    if(camera.current !== null){
      const location = await getLocation();
      const photo = await camera.current.takePhoto({});
      const savePath = await savePhoto(photo.path, location.latitude,location.longitude)

      console.log('Caminho: ', savePath)
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
          <Button title="Gallery"  onPress={() => navigation.navigate('Gallery')}/>
      </View>
    </View>
  )
}