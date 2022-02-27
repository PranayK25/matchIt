import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {MenuScreen} from '../../assets';
import {Button} from '../components'

const Score = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={MenuScreen}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Text style={styles.text}>Game Start</Text>
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
  text: {
    color: 'black',
  },
  button: {
    alignSelf: "center",
    marginTop: 500
  }
});

export default Score;
