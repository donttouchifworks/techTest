import {View, Text} from "../components/Themed";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ navigation }: RootTabScreenProps<'dashboard'>){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <TouchableOpacity onPress={() => {
                alert('1')
            }}/>
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
