import React, { useCallback, useEffect, useState } from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import { listPhotos } from "../../services/storageServices";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Camera } from "react-native-vision-camera";
import { checkPermissions, showPermissionAlert } from "../../services/permissionsServices";

export default function GalleryScreen(): React.JSX.Element{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [photos, setPhotos] = useState<string[]>([])

    useFocusEffect(
        useCallback( () => {
        const getPhotos = async () =>{
            const photos = await listPhotos();
            setPhotos(photos);
        }
        getPhotos();
    }, [])
    )

    useEffect( () =>{
        async function getPermissions() {
            await Camera.requestCameraPermission();
            await Camera.requestLocationPermission();
        }
        getPermissions();
    }, [])

    const imageDetails = (photoLocation: string) => {
        navigation.navigate('Detalhes', {photoLocation});
    }

    const gotoCamera = async () =>{
        const hasPermission = await checkPermissions();
        if(hasPermission){
            navigation.navigate('Camera');
        }else{
            showPermissionAlert();
        }
    }

    return(
        <View style={styles.container}>
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
                        <View style={styles.emptyContainer}>
                            <Text style={styles.textEmpty}>Sua biblioteca está vazia. </Text>
                        </View>
                    )}

                    <TouchableOpacity style={styles.cameraBtn} onPress={() => gotoCamera()}>
                        <Image source={require('../../assets/images/iconCamera.png')} style={styles.cameraLogo}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.bottomText}>
                {photos.length > 0 && (
                        <Text style={styles.textB}>Fotos: {photos.length} foto(s).</Text>
                )}
            </View>
        </View>
    )
}