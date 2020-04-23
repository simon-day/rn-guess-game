import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  const { guessRounds, userNumber, onRestart } = props;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={{ ...DefaultStyles.title, ...styles.title }}>
          The game is over!
        </Text>
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
            Your phone needed{' '}
            <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>

          <View style={styles.button}>
            <MainButton onPress={onRestart}>PLAY AGAIN</MainButton>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width < 400 ? 16 : 20,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('screen').height / 30,
  },
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 100,
  },
  button: {
    paddingTop: 15,
    alignItems: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
