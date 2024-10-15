import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {gameStateValues} from '../Main';

type endGamePropTypes = {
  name: string;
  updateGameState: (val: gameStateValues) => void;
};

function EndGame(props: endGamePropTypes): React.JSX.Element {
  const winnerPlayer = props.name;
  const updateGameState = props.updateGameState;

  return (
    <View>
      <Text style={styles.txt}>Winner is {winnerPlayer}!!</Text>
      <Text>The winner is: {winnerPlayer}</Text>
      <TouchableOpacity
        onPress={() => updateGameState(gameStateValues.Start)}
        style={styles.btn}>
        <Text style={styles.txt}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  txt: {
    color: '#FFF',
  },
});

export default EndGame;
