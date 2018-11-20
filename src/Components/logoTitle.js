import React from 'react';
import { Image, StyleSheet } from 'react-native';

const logoImage = require('../Images/18.png');

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        marginLeft: 5,
    },
});

const LogoTitle = () => <Image source={logoImage} style={styles.image} />;

export default LogoTitle;
