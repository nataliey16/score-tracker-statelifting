import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import CheckBox from './components/CheckBox';
import MyTextInput from './components/MyTextInput';
import Output from './components/Output';

function Main(): React.JSX.Element {
  // To provide data to output component, need to perform State-Lifting
  //Move the state from individual components and add to Parent (Main) component
  //Allows us to pass states as props via child components

  const [userInputVal, setUserInputVal] = useState('');
  const [checkboxVal, setCheckboxVal] = useState(false);
  const [showOutput, setShowOutput] = useState({
    userInputVal: '',
    checkboxVal: '',
  }); // state object

  const updateUserInputVal = (val: string) => {
    console.log(`Update user input: ${val}`);
    setUserInputVal(val);
  };

  const updateCheckStatus = (status: boolean) => {
    console.log(`Check status: ${status} `);
    setCheckboxVal(status);
  };

  const handleSubmit = () => {
    setShowOutput({
      userInputVal: userInputVal,
      checkboxVal: checkboxVal ? 'Checked' : 'Not Checked',
    });
  };

  return (
    <View style={styles.appBkg}>
      {/* Import multiple child components: 
      In order to share data across 
      all components - have all state management in main 
      and pass States as props in the components*/}
      <MyTextInput
        placeholderTxt="Enter item"
        userInputVal={userInputVal}
        updateUserInputVal={updateUserInputVal}
      />
      <CheckBox
        txtLabel="Checkbox 1"
        checkedStatus={checkboxVal}
        updateCheckStatus={updateCheckStatus}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Output
        inputVal={showOutput.userInputVal}
        checkboxVal={showOutput.checkboxVal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appBkg: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Main;
