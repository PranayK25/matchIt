import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {MenuScreen} from '../../assets';
import {Button} from '../components'
import {color, scaling} from '../library';

const {normalize, widthScale, heightScale, moderateScale} = scaling;

const Menu = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={MenuScreen}
        resizeMode="cover"
        style={styles.imageBackground}>
          <Text style={styles.titleText}>
            MATCH IT
          </Text>
        <Button title="Start" style={styles.button} onPress={() => props.navigation.navigate("GameBoard")}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  button: {
    alignSelf: "center",
    marginTop: heightScale(180)
  },
  titleText: {
    alignSelf: "center",
    fontSize: normalize(60),
    marginTop: heightScale(80)
  },
});

export default Menu;
