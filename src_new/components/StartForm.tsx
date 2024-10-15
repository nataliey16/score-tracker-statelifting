import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type startFormParamType = {
  handleData: (p1: string, p2: string, maxScore: number) => void;
  //setP1NameFunc: (newTxt: string) => void;
  //p1NameValue: string;
};

function StartForm(props: startFormParamType): React.JSX.Element {
  const [p1Name, setP1Name] = useState('');
  const [p2Name, setP2Name] = useState('');
  const [maxScore, setMaxScore] = useState('');

  //const handleData = props.handleData;

  function handleSubmit() {
    //1. check value of maxScore, if Nan then dont proceed
    //Nan - Not A Number
    const maxScoreValue = Number(maxScore); //conver maxScore from string to number
    console.log(maxScoreValue);
    if (isNaN(maxScoreValue) || maxScoreValue > 30) {
      //we can show some error to user but for now we log
      console.log('Not a valid Max Score entered');
      return;
    }
    //2. return data to Main component
    props.handleData(p1Name, p2Name, maxScoreValue);
  }
  return (
    <View>
      <View style={styles.txtInputView}>
        <Text style={styles.label}>Player 1:</Text>
        <TextInput
          style={styles.txtInput}
          maxLength={50}
          value={p1Name}
          onChangeText={setP1Name}
        />
      </View>
      <View style={styles.txtInputView}>
        <Text style={styles.label}>Player 2:</Text>
        <TextInput
          style={styles.txtInput}
          maxLength={50}
          value={p2Name}
          onChangeText={setP2Name}
        />
      </View>
      <View style={styles.txtInputView}>
        <Text style={styles.label}>Max Score:</Text>
        <TextInput
          style={styles.txtInput}
          maxLength={50}
          value={maxScore}
          onChangeText={setMaxScore}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            console.log('Submit Pressed');
            handleSubmit();
          }}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 10,
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFF',
    fontSize: 25,
    fontWeight: '600',
    padding: 10,
    width: 300,
    color: '#FFF',
  },
  txtInputView: {
    marginVertical: 10,
    padding: 10,
    borderColor: '#000',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonView: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 14,
    color: '#FFF',
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
  },
});

export default StartForm;
