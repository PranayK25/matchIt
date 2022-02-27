import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import {color, scaling} from '../library';
import {emptyTile} from '../../assets';

const {normalize, widthScale, heightScale, moderateScale} = scaling;

const Tile = props => {

  return (
    <View style={styles.iconContainer}>
      {props.emptyTile ? (
        <ImageBackground
          resizeMode="contain"
          source={emptyTile}
          style={styles.icon}>
          <Text style={styles.text}>{props.text}</Text>
        </ImageBackground>
      ) : (
        <Image
          source={props.icon}
          style={{...styles.icon, opacity: props.matchedTile ? 0.3 : 1}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 1,
    borderColor: color.white,
    borderRadius: moderateScale(15),
  },
  icon: {
    height: heightScale(45),
    width: widthScale(55),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.white,
    fontSize: 20,
  },
});

export default Tile;
