import React, { useEffect, useState } from "react";
import {View, Text, ScrollView, Image} from 'react-native';
import { styles } from "./styles";
import { listPhotos } from "../../services/storageServices";

export default function GalleryScreen(): React.JSX.Element{

    const [photos, setPhotos] = useState<string[]>([])

    useEffect( () => {
        const getPhotos = async () =>{
            const photos = await listPhotos();
            setPhotos(photos);
        }

        getPhotos()
    }, [])

    console.log('Fotos encontradas:', photos);
    return(
        <View style={styles.container}>
            <Text>Galeria</Text>
            <View style={styles.photosContainer}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {photos.length > 0 ? (
                    photos.map((uri, index) =>(
                        <Image key={index} 
                        source={{ uri }} 
                        style={styles.images} 
                        resizeMode="cover"/>  
                    ))
                ) : (
                        <Text style={styles.textEmpty}>Sua biblioteca está vazia. </Text>
                )}
                </ScrollView>
            </View>
        </View>
    )
}