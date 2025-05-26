import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    photosContainer:{
        flex: 1,
    },
    images:{
        width: 120,
        height: 160,
        margin: 5,
        borderRadius: 8,
    },
    contentContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    textEmpty:{
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black'
    }
})