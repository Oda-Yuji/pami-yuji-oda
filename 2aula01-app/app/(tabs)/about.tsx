import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>About screen.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: 
    {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text: 
    {
        color: '#fff',
    },
})