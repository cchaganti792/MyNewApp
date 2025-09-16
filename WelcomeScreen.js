import * as React from 'react';
import {StyleSheet,ScrollView,View,Text} from 'react-native';
export default function WelcomeScreen() {
    return (
        <ScrollView indicatorStyle={"white"} style={styles.scrollView}>
            <Text style={styles.title}>Welcome to Little Lemon</Text>
            <Text style={styles.description}>Little Lemon is charming neighborhood bistro that serves simple food and classic cocktails in a lively but causal environment. we would love to have you!</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'black',
    },
    title: {
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    description: {
        padding: 20,
        fontSize: 30,
        marginVertical: 8,
        color: 'white',
        textAlign: 'center',
    },
});
    