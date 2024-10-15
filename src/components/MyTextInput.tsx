import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

type myTxtInputPropsTypes = {
  placeholderTxt: string;
  userInputVal: string;
  updateUserInputVal: (val: string) => void;
};

function MyTextInput(props: myTxtInputPropsTypes): React.JSX.Element {
  //   const [userInput, setUserInput] = useState('');

  const placeholderTxt = props.placeholderTxt;

  //state-lifting
  const userInputVal = props.userInputVal;
  const updateUserInputVal = props.updateUserInputVal;

  return (
    <View style={styles.txtInputView}>
      <TextInput
        style={styles.txtInput}
        value={userInputVal}
        placeholder={placeholderTxt}
        onChangeText={updateUserInputVal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    fontSize: 25,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  txtInputView: {
    marginVertical: 10,
    padding: 10,
  },
});
export default MyTextInput;
