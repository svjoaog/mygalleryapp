import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#E3B8B8',
    },
    photosContainer:{
        flex: 1,
    },
    images:{
        width: 70,
        height: 70,
        margin: 5,
        borderRadius: 8,
    },
    contentContainer:{
        paddingLeft: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    textEmpty:{
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black'
    },
    cameraBtn:{
        width: 70,
        height: 70,
        margin: 5,
        borderWidth: 2,
        color: 'red',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    cameraLogo:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 8
    },
    emptyContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    
    }
})