import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
const App = () => {
  const [bg, setbg] = useState('rgb(32,0,126)');
  const changeBg = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setbg(color);
  };
  const reset = () => {
    setbg('#000000');
  };
  return (
    <>
      <StatusBar backgroundColor={bg} />

      <View style={[styles.container, {backgroundColor: bg}]}>
        <TouchableOpacity onPress={changeBg}>
          <Text style={styles.text}> Change BackGround</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={styles.text1}> Reset BackGround</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: bg,
  },
  text: {
    fontSize: 20,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
  },
  text1: {
    marginTop: 10,
    fontSize: 20,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 45,
    color: '#FFFFFF',
  },
});
