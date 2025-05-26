import React, { useEffect, useRef } from "react"
import {View, TouchableOpacity, Button} from 'react-native'
import {styles} from './styles';
import { Camera, useCameraDevice} from "react-native-vision-camera";

import { savePhoto } from "../../services/storageServices";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen(): React.JSX.Element{
  const navigation = useNavigation();
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
      const photo = await camera.current.takePhoto({});
      const savePath = await savePhoto(photo.path);
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
          <Button title="Gallery"  onPress={() => navigation.navigate('Gallery' as never)}/>
      </View>
    </View>
  )
}