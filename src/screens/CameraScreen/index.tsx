import React, { useEffect, useRef, useState } from "react"
import {View, TouchableOpacity} from 'react-native'
import {styles} from './styles';
import { Camera, useCameraDevice} from "react-native-vision-camera";


export default function CameraScreen(): React.JSX.Element{

  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back')
    useEffect( () => {
      async function getPermission(){
        const newCameraPermission = await Camera.requestCameraPermission()
      }

      getPermission();
    }, []);

  const takePhoto = async () =>{
    if(camera.current !== null){
      const photo = await camera.current.takePhoto({});
      console.log('Foto Tirada', photo.path)
    } else{
      console.log('erro na foto')
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