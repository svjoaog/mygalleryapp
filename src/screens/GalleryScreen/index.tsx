import React from "react";
import {View, Text} from 'react-native';
import { styles } from "./styles";
import { listPhotos } from "../../services/storageServices";

export default function GalleryScreen(): React.JSX.Element{
    return(
        <View style={styles.container}>

            <Text>Aqui é a galeria</Text>
        </View>
    )
}