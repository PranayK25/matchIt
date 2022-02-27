import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import {color, scaling} from '../library'

const { normalize, widthScale, heightScale, moderateScale } = scaling;

const Button = (props) => {
    return(
        <TouchableOpacity style={[styles.buttonContainer, props.style]} onPress={props.onPress} activeOpacity={0.8}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: moderateScale(30),
        backgroundColor: color.darkBlue,
        justifyContent: "center",
        alignItems: "center",
        borderColor: color.white,
        borderWidth: 1,
    },
    text: {
        fontSize: normalize(30),
        paddingHorizontal: widthScale(70),
        paddingVertical: heightScale(10)
    }
});

export default Button