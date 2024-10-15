import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import StartForm from './components/StartForm';
import ScoreCard from './components/ScoreCard';
import PlayView from './components/PlayView';
import EndGame from './components/EndGame';

export enum gameStateValues {
  Start = 0,
  Play, //1
  End, //2
}

//global variables, not state - if we keep them local, when Main reruns, it will reset and show the empty
let P1Name = '';
let P2Name = '';
let MaxScore = 0;

function Main(): React.JSX.Element {
  //Game statement Management
  const [gameState, updateGameState] = useState(gameStateValues.Start);
  const [winnerName, setWinnerName] = useState('');
  //it will update start from to take parameter
  const handleStartFormData = (p1: string, p2: string, maxScore: number) => {
    P1Name = p1;
    P2Name = p2;
    MaxScore = maxScore;

    //update game state to change screen.
    updateGameState(gameStateValues.Play);
  };

  // const handleChangeState = () => {
  //   console.log('Change State');
  //   if (gameState === GameState.START) {
  //     setGameState(GameState.PLAY);
  //     console.log(gameState + 'Pressed');
  //   }
  //   else if(gameState === gameState.PLAY) {
  //     setGameS
  //   }
  // };

  //Array of screens
  const screens: Array<React.JSX.Element> = [
    <StartForm handleData={handleStartFormData} />,
    <PlayView
      p1Name={P1Name}
      p2Name={P2Name}
      maxScore={MaxScore}
      updateGameState={updateGameState}
      setWinnerName={setWinnerName}
    />,
    <EndGame name={winnerName} updateGameState={updateGameState} />,
  ];

  return (
    // <ScrollView>
    //   <View style={styles.appView}>
    //     <StartForm />
    //     <PlayView />
    //     <EndGame />
    //   </View>
    // </ScrollView>
    <View style={styles.appView}>{screens[gameState]}</View>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'center',
    color: '#fff',
  },
});

export default Main;
