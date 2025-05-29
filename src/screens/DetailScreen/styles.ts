import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E3B8B8'
    },
    textInfo:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    info:{
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'normal'
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textContainer:{
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 10,
        backgroundColor: 'red',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingBottom: 10
    },
    imageContainer:{
        width: '100%',
        height: 350
    }
})