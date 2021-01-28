import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Sound from '';
const sounds = [
  require('./Assets/one.wav'),
  require('./Assets/two.wav'),
  require('./Assets/three.wav'),
  require('./Assets/four.wav'),
  require('./Assets/five.wav'),
  require('./Assets/six.wav'),
  require('./Assets/seven.wav'),
  require('./Assets/eight.wav'),
  require('./Assets/nine.wav'),
  require('./Assets/ten.wav'),
];
const playSound = (sound) => {
  const ss = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
    if (err) {
      console.log('Not Able to Play sound');
    }
  });
  setTimeout(() => {
    ss.play();
  }, 1000);
  ss.release();
};
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.image}>
        <Image source={require('./Assets/logo.png')} />
      </View>
      <View style={styles.body}>
        {sounds.map((sound) => (
          <TouchableOpacity style={styles.box} key={sound}>
            <Text>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6454E5',
  },
  image: {
    alignItems: 'center',
    marginTop: 80,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 150,
    borderColor: '#000000',
    borderWidth: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F47070',
  },
});
