import {View, Text} from "../components/Themed";
import {ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {Image} from 'react-native'
import { RootTabScreenProps } from '../types';
import React, {useEffect, useState } from "react";
import axios from 'axios';

export default function Dashboard({ navigation }: RootTabScreenProps<'dashboard'>){
    let [dogImage, setDogImage] = useState(null)
    const [isLoading, setLoading] = useState(true);

    // 3. Create out useEffect function
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setDogImage(data.message))
    },[])

    return(
        <View style={ styles.container }>
            {dogImage ? <ActivityIndicator/> : (
            <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}></Image>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
