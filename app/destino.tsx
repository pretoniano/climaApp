import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const [city, setCity] = useState('');


export default function Destino () {
    return(
        <View>
            <Text>Destino</Text>
            <TouchableOpacity style={styles.button} >
            <Text style ={styles.buttonText}>acessar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        backgroundColor: "#FFB300",
        borderRadius: 5,
        height: "6%",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 22,
        margin: 5,
}
})