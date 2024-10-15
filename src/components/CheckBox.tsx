import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type checkBoxPropsType = {
  txtLabel: string;
  checkedStatus: boolean;
  updateCheckStatus: (isChecked: boolean) => void; // function to update status
};

function CheckBox(props: checkBoxPropsType): React.JSX.Element {
  //   const [checked, setChecked] = useState(false);

  const txtLabel = props.txtLabel;
  const checkedStatus = props.checkedStatus;
  const updateCheckStatus = props.updateCheckStatus;

  return (
    <View style={styles.checkBoxView}>
      <BouncyCheckbox
        isChecked={checkedStatus}
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        // text="Custom Checkbox"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        // textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          //   console.log(isChecked);
          updateCheckStatus(isChecked);
        }}
      />
      <Text style={styles.label}>{txtLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // width: '100%',
    padding: 10,
  },
  label: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
});

export default CheckBox;
