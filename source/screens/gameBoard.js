import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {
  MenuScreen,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
} from '../../assets';
import {color, scaling} from '../library';
import {Tile, Button} from '../components';

const {normalize, widthScale, heightScale, moderateScale} = scaling;

const GameBoard = () => {
  const [tiles, setTiles] = useState([]);
  const [turn, setTurn] = useState(0);
  const [firstTile, setFirstTile] = useState(null);
  const [secondTile, setSecondTile] = useState(null);
  const [matchedTiles, setMatchedTiles] = useState([]);

  const gameTiles = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];

  useEffect(() => {
    shuffleTiles();
  }, []);

  useEffect(() => {
    if (firstTile && secondTile) {
      compareTiles();
    }
  }, [firstTile, secondTile]);

  const shuffleTiles = () => {
    const tileList = [...gameTiles, ...gameTiles];
    const randomizedTiles = tileList
      .sort(() => Math.random() - 0.5)
      .map(item => ({icon: item, id: Math.random()}));

    setTiles(randomizedTiles);
    setTurn(0);
    setMatchedTiles([]);
  };

  const onTilePress = tile => {
    firstTile ? setSecondTile(tile) : setFirstTile(tile);
  };

  const compareTiles = () => {
    if (firstTile.icon === secondTile.icon) {
      setTimeout(() => {
        setMatchedTiles([...matchedTiles, firstTile, secondTile]);
        resetTiles();
      }, 500);
    } else {
      setTimeout(() => {
        resetTiles();
      }, 500);
    }
  };

  const resetTiles = () => {
    setFirstTile(null);
    setSecondTile(null);
    setTurn(turn + 1);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={MenuScreen}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Text style={styles.titleText}>MATCH IT</Text>
        <View style={styles.header}>
          <Text style={styles.turnText}>Turns : {turn}</Text>
          <Text style={styles.turnText}>
            Matches : {matchedTiles.length / 2}
          </Text>
        </View>
        {matchedTiles.length === 16 ? (
          <View style={styles.victoryContainer}>
            <Text style={styles.victoryText}>VICTORY!</Text>
            <Button
              title={'Reset'}
              onPress={() => shuffleTiles()}
              style={styles.button}
            />
          </View>
        ) : (
          <View style={styles.board}>
            <FlatList
              data={tiles}
              scrollEnabled={false}
              numColumns={4}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.tileContainer}
                    onPress={() => onTilePress(item)}
                    disabled={
                      matchedTiles.includes(item) ||
                      (firstTile && secondTile) ||
                      firstTile === item ||
                      secondTile === item
                    }>
                    {firstTile === item ||
                    secondTile === item ||
                    matchedTiles.includes(item) ? (
                      <Tile
                        style={styles.text}
                        icon={item.icon}
                        matchedTile={matchedTiles.includes(item)}
                      />
                    ) : (
                      <Tile
                        style={styles.text}
                        emptyTile={true}
                        text={String.fromCharCode(65 + index)}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
            <Button
              title={'Reset'}
              onPress={() => shuffleTiles()}
              style={styles.resetButton}
            />
          </View>
        )}
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
    color: 'white',
  },
  tileContainer: {
    margin: moderateScale(10),
  },
  board: {
    alignSelf: 'center',
    marginTop: heightScale(40),
    flex: 1,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: normalize(40),
    marginTop: heightScale(20),
  },
  header: {
    marginTop: heightScale(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: widthScale(20),
  },
  turnText: {
    backgroundColor: color.darkBlue,
    borderColor: color.white,
    borderRadius: moderateScale(15),
    borderWidth: 1,
    paddingHorizontal: widthScale(15),
    paddingVertical: heightScale(10),
    color: color.white,
    fontSize: normalize(20),
  },
  victoryContainer: {
    alignSelf: 'center',
    marginTop: heightScale(150),
    alignItems: 'center',
  },
  victoryText: {
    fontSize: normalize(60),
  },
  button: {
    marginTop: heightScale(100),
  },
  resetButton: {
    marginTop: heightScale(10),
    marginBottom: heightScale(30),
    marginHorizontal: widthScale(20),
  },
});

export default GameBoard;
