import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

type scoreCardPropTypes = {
  playerName: string;
  maxScore: number;
  setScore: Array<number>;
  currentScore: number;
  updateCurrentScore: (val: number) => void; //function
  handleWinner: () => void;
};

function ScoreCard(props: scoreCardPropTypes): React.JSX.Element {
  const playerName = props.playerName;
  const maxScore = props.maxScore;

  const score = props.setScore;
  const currentScore = props.currentScore;
  const updateCurrentScore = props.updateCurrentScore;
  const handleWinner = props.handleWinner;
  // const scores = [0, 0, 0];

  const [displayWinnerBtn, setDisplayWinnerBtn] = useState(false);

  //Local state for current score
  // const [currentScore, updateCurrentScore] = useState(0);

  const handleScoreUpdate = (updateType: number) => {
    let newScore = 0;
    if (updateType === 1) {
      //increment the score
      newScore = currentScore >= maxScore ? currentScore : currentScore + 1;
    } else if (updateType === 2) {
      //decrement the score

      newScore = currentScore <= 0 ? 0 : currentScore - 1;
    }
    setDisplayWinnerBtn(newScore >= maxScore ? true : false);

    updateCurrentScore(newScore);
  };

  return (
    <View>
      <View style={styles.cardView}>
        <Text style={styles.nameLabel}>{playerName}</Text>
        <View style={styles.scoreView}>
          <Text style={styles.setTxt}>Sets:</Text>
          {score.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.scoreTxt}>{item}</Text>
              </View>
            );
          })}
          {/* {scores.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.scoreTxt}>{item}</Text>
              </View>
            );
          })} */}
        </View>
        <View>
          <Text style={styles.currentScoreTxt}>{currentScore}</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btnBorder}
            onPress={() => handleScoreUpdate(2)}>
            <Text style={[styles.txt, styles.btnSize]}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnBorder}
            onPress={() => handleScoreUpdate(1)}>
            <Text style={[styles.txt, styles.btnSize]}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleWinner}
          style={[
            styles.btnBorder,
            {display: displayWinnerBtn ? 'flex' : 'none'},
          ]}>
          <Text style={[styles.txt]}>Winner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreCardView: {
    padding: 20,
  },
  txt: {
    color: '#fff',
    fontSize: 25,
  },
  cardView: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: 400,
    height: 400,
    alignItems: 'center',
  },
  nameLabel: {
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
    textDecorationLine: 'underline',
  },

  setTxt: {
    color: '#fff',
    fontSize: 25,
  },
  scoreView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  scoreTxt: {
    color: '#fff',
    fontSize: 25,
    paddingHorizontal: 6,
  },
  currentScoreTxt: {color: '#fff', fontSize: 80},

  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  btnBorder: {
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  btnSize: {
    fontSize: 30,
  },
});

export default ScoreCard;
