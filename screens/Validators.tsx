import {View, Text} from "../components/Themed";
import { StyleSheet, TouchableOpacity } from 'react-native';
import {RootTabScreenProps} from "../types";

export default function Validators({ navigation }: RootTabScreenProps<'validators'>){
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Validators</Text>
            <TouchableOpacity
                onPress={() => {
                alert('2')
                }}
                style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
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
