import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const App = () => {
  const currency = {
    Dollar: 0.04,
    Euro: 0.012,
    Pound: 0.011,
    Rubel: 0.93,
    AusDollar: 0.2,
    CanDollar: 0.019,
    Yen: 1.54,
    Dinar: 0.0043,
    Bitcoin: 0.000004,
  };
  const [input, setinput] = useState(0);
  const [answer, setanswer] = useState(0);
  const calculate = (currencyValue) => {
    if (!input)
      return Snackbar.show({
        text: 'Please enter the value',
        backgroundColor: '#F47070',
        textColor: '#ffffff',
      });
    let amount = parseFloat(input) * currency[currencyValue];
    setanswer(amount.toFixed(2));
  };
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.first}>
            <Text>Currency Convertor</Text>
            <Text style={styles.first__text}>{answer}</Text>
            <TextInput
              placeholder="Enter in Indian Rupees"
              keyboardType="numeric"
              style={styles.first__input}
              //value={input}
              placeholderTextColor="#000"
              onChangeText={(values) => setinput(values)}
            />
          </View>
          <View style={styles.opacity}>
            {Object.keys(currency).map((currency) => (
              <TouchableOpacity
                key={currency}
                style={styles.text}
                onPress={() => calculate(currency)}>
                <Text>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22CC7E',
  },
  first: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  first__text: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderColor: '#29B966',
  },
  first__input: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginTop: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#29B966',
  },
  opacity: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  text: {
    height: 100,
    width: '30.3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginRight: 5,
    marginTop: 20,
  },
});
