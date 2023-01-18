import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function App() {
  const [hideMoney, setHideMoney] = useState(true);

  const toogleMoneyMask = () => {
      setHideMoney((oldHideMoney)=> 
        !oldHideMoney
        )  
  }

  const returnPlayBtn = () => {
    switch (hideMoney) {
      case true:
        return <FontAwesome color="#000000" name="eye-slash" size={24} />;
      case false:
        return <FontAwesome color="#000000" name="eye" size={24} />;
      case undefined:
        return <FontAwesome color="#000000" name="eye-slash" size={24} />;
      default:
          //       return <FontAwesome color="#fff" name="eye-slash" size={24} />;

    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.moneyView}>
        <View style={styles.moneyShowcaseView}>
              <Text style={styles.moneyMaskCurrency}>
                R$
              </Text>
            <TextInput
              secureTextEntry={hideMoney ? true : false}
              value="2,000"
              editable={false}
              style={styles.moneyMask}
              >
            </TextInput>
        </View>
        <TouchableOpacity
          onPress={toogleMoneyMask}
        >
          {returnPlayBtn()}
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moneyView:{
    flexDirection: 'row'
  },
  moneyShowcaseView: {
    width: '60%',
    // backgroundColor: '#CCC',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moneyMaskCurrency: {
    fontSize: 24,
    marginRight: 5,
    color: "#000000"
  },
  moneyMask: {
    fontSize: 70,
    color: "#000000"
  },
  moneyMaskCents: {
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 12,
  },
  eyeIcon: {
    paddingLeft: 12,
  }
});
