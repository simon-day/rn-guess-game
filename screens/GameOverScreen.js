import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = (props) => {
  const { guessRounds, userNumber, onRestart } = props;

  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Card style={styles.cardContainer}>
        <Text>Number of rounds: {guessRounds}</Text>
        <Text>Number was: {userNumber}</Text>
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
  },
  cardContainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
  },
});

export default GameOverScreen;
