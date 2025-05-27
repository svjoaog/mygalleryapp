import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getPhotoInfo } from "../../services/storageServices";

import { styles } from "./styles";

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route }: DetailProps) {
  const { photoLocation } = route.params;
  const [photoInfo, setPhotoInfo] = useState<any>(null);

  useEffect(() =>{
    const getInfo = async() => {
        const info = await getPhotoInfo(photoLocation);
        setPhotoInfo(info);
    };

    getInfo();
  }, [photoInfo]);



  return (
    <View style={styles.container}> 
      <Image source={{ uri: photoLocation }} style={styles.image} />

      <View style={styles.textContainer}>
        {photoInfo && (
          <>
            <Text style={styles.textInfo}>Data/Hora:</Text> <Text style={styles.info}>{new Date(photoInfo.date).toLocaleString()}</Text>
            <Text style={styles.textInfo}>Latitude:</Text> <Text style={styles.info}>{photoInfo.location.latitude}</Text>
            <Text style={styles.textInfo}>Longitude:</Text> <Text style={styles.info}>{photoInfo.location.longitude}</Text>
          </>
        )}
      </View>
    </View>
  );
}