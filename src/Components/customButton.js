import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    customButton: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor: '#0095ff',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#fff',
    },
    customButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

const CustomButton = ({ onPressAction, text }) => (
    <TouchableOpacity style={styles.customButton} onPress={onPressAction}>
        <Text style={styles.customButtonText}>{text}</Text>
    </TouchableOpacity>
);

export default CustomButton;
