import React, {useState} from 'react';
import {Text, View, Pressable, Image, StyleSheet} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
const App = () => {
  const [img, setimg] = useState(DiceOne);
  const [img1, setimg1] = useState(DiceOne);
  const presssed = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    let num1 = Math.floor(Math.random() * 6) + 1;
    switch (num) {
      case 1:
        setimg(DiceOne);
        // setimg1(DiceOne);
        break;
      case 2:
        setimg(DiceTwo);
        // setimg1(DiceTwo);
        break;
      case 3:
        setimg(DiceThree);
        // setimg1(DiceThree);
        break;
      case 4:
        setimg(DiceFour);
        // setimg1(DiceFour);
        break;
      case 5:
        setimg(DiceFive);
        // setimg1(DiceFive);
        break;
      case 6:
        setimg(DiceSix);
        // setimg1(DiceSix);
        break;
      default:
        setimg(DiceFive);
        // setimg1(DiceFive);
        break;
    }

    switch (num1) {
      case 1:
        // setimg(DiceOne);
        setimg1(DiceOne);
        break;
      case 2:
        // setimg(DiceTwo);
        setimg1(DiceTwo);
        break;
      case 3:
        // setimg(DiceThree);
        setimg1(DiceThree);
        break;
      case 4:
        // setimg(DiceFour);
        setimg1(DiceFour);
        break;
      case 5:
        // setimg(DiceFive);
        setimg1(DiceFive);
        break;
      case 6:
        // setimg(DiceSix);
        setimg1(DiceSix);
        break;
      default:
        // setimg(DiceFive);
        setimg1(DiceFive);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txt}>Dice Roller</Text>
        <View style={styles.img2}>
          <Image source={img1} style={styles.image} />
          <Image source={img} style={styles.image} />
        </View>
        <Pressable onPress={presssed}>
          <Text style={styles.btn}>Roll a dice</Text>
        </Pressable>
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
    backgroundColor: '#6454E5',
  },
  btn: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'bold',
    paddingHorizontal: 30,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F56C6C',
    borderColor: '#F56C6C',
    paddingBottom: 6,
  },
  img2: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
  },
  txt: {
    fontSize: 30,
    fontFamily: 'bold',
    fontStyle: 'italic',
    color: '#F56C6C',
  },
});
