import {View, Text} from "../components/Themed";
import {ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import React, {useEffect, useState } from "react";

export default function Dashboard({ navigation }: RootTabScreenProps<'dashboard'>){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    return(
        <View style={ styles.container }>
            <Text>Dash</Text>
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
