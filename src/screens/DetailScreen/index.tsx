import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getPhotoInfo } from "../../services/storageServices";

import { styles } from "./styles";

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

const dateFormat = (date: string) => {
  return new Date(date).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

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
      <View style={styles.imageContainer}>
        <Image source={{ uri: photoLocation }} style={styles.image} />
      </View> 
      
        {photoInfo && (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.textInfo}>Data/Hora:  <Text style={styles.info}> {dateFormat(photoInfo.date)} </Text>
              </Text> 
              <Text style={styles.textInfo}>Latitude:  <Text style={styles.info}>{photoInfo.location.latitude}</Text>
              </Text>
              <Text style={styles.textInfo}>Longitude:  <Text style={styles.info}>{photoInfo.location.longitude}</Text>
              </Text>
            </View>
          </>
        )}
    </View>
  );
}