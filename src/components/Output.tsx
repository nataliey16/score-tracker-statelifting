import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type outputPropType = {
  inputVal: string;
  checkboxVal: string;
};

function Output(props: outputPropType): React.JSX.Element {
  const inputVal = props.inputVal;
  const checkboxVal = props.checkboxVal;
  return (
    <View style={styles.outputView}>
      <Text style={styles.outputTxt}>{inputVal}</Text>
      <Text style={styles.outputTxt}>{checkboxVal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outputView: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  outputTxt: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default Output;
