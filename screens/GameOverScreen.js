import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  const { guessRounds, userNumber, onRestart } = props;

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={700}
          style={styles.image}
          resizeMode="cover"
          // source={require('../assets/success.png')}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg',
          }}
        />
      </View>

      <Card style={styles.cardContainer}>
        <Text style={{ ...DefaultStyles.bodyText, ...styles.bodyText }}>
          Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>

        <View style={styles.button}>
          <Button onPress={onRestart} title="Play Again" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  cardContainer: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingTop: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
