import React, { useEffect, useState } from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import { listPhotos } from "../../services/storageServices";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

export default function GalleryScreen(): React.JSX.Element{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [photos, setPhotos] = useState<string[]>([])

    useEffect( () => {
        const getPhotos = async () =>{
            const photos = await listPhotos();
            setPhotos(photos);
        }

        getPhotos()
    }, [])


    console.log('Fotos encontradas:', photos);

    const imageDetails = (photoLocation: string) => {
        navigation.navigate('Detail', {photoLocation})
    }
    return(
        <View style={styles.container}>
            <Text>Galeria</Text>
            <View style={styles.photosContainer}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {photos.length > 0 ? (
                    photos.map((uri, index) =>(
                        <TouchableOpacity key={uri} onPress={() => imageDetails(uri)}>
                            <Image key={index} 
                            source={{ uri }} 
                            style={styles.images} 
                            resizeMode="cover"/>  
                        </TouchableOpacity>
                    ))
                ) : (
                        <Text style={styles.textEmpty}>Sua biblioteca está vazia. </Text>
                )}
                </ScrollView>
            </View>
        </View>
    )
}