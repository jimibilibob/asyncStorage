import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import CardColor from './src/components/CardColor';

export default function App() {
  function randomStyle () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    console.log('Random Color', randomColor);
    return {
      backgroundColor: randomColor
    }
  }

  return (
    <View style={styles.container}>
      <CardColor onPress= {randomStyle}></CardColor>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
