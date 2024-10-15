import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScoreCard from './ScoreCard';
import {gameStateValues} from '../Main';

type playViewPropTypes = {
  p1Name: string;
  p2Name: string;
  maxScore: number;
  updateGameState: (val: gameStateValues) => void;
  setWinnerName: (val: string) => void;
};

let p1SetCount = 0;
let p2SetCount = 0;

function PlayView(props: playViewPropTypes): React.JSX.Element {
  const P1Name = props.p1Name;
  const P2Name = props.p2Name;
  const MaxScore = props.maxScore;
  const updateGameState = props.updateGameState;
  const setWinnerName = props.setWinnerName;

  const [setScoreP1, updateSetScoreP1] = useState([0, 0, 0]);
  const [setScoreP2, updateSetScoreP2] = useState([0, 0, 0]);
  const [currentScoreP1, updateCurrentScoreP1] = useState(0); // moved from ScoreCard
  const [currentScoreP2, updateCurrentScoreP2] = useState(0); // moved from ScoreCard
  //State to keep track of current set number.
  const [currentSet, updateCurrentSet] = useState(0);

  const handleWinnerEvent = () => {
    const newSetScoreP1 = [...setScoreP1];
    newSetScoreP1[currentSet] = currentScoreP1;
    updateSetScoreP1(newSetScoreP1);
    updateCurrentScoreP1(0);
    if (currentScoreP1 >= MaxScore) {
      p1SetCount++;
    }

    const newSetScoreP2 = [...setScoreP2];
    newSetScoreP2[currentSet] = currentScoreP2;
    updateSetScoreP2(newSetScoreP2);
    updateCurrentScoreP2(0);

    if (currentScoreP2 >= MaxScore) {
      p2SetCount++;
    }

    updateCurrentSet(currentSet + 1);

    if (currentSet >= 2) {
      //implement logic to find winner of game
      const winnerPlayerName = p1SetCount > p2SetCount ? P1Name : P2Name;
      setWinnerName(winnerPlayerName);
      updateGameState(gameStateValues.End);
    }
  };

  // set score will go into here
  return (
    //Prop drilling passing from main to playview to scorecard (another child component)
    <View>
      <ScoreCard
        playerName={P1Name}
        maxScore={MaxScore}
        setScore={setScoreP1}
        currentScore={currentScoreP1}
        updateCurrentScore={updateCurrentScoreP1}
        handleWinner={handleWinnerEvent}
      />
      <ScoreCard
        playerName={P2Name}
        maxScore={MaxScore}
        setScore={setScoreP2}
        currentScore={currentScoreP2}
        updateCurrentScore={updateCurrentScoreP2}
        handleWinner={handleWinnerEvent}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default PlayView;
