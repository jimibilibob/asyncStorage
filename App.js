import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import CardColor from './src/components/CardColor';

export default function App() {
  function randomStyle () {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)

    return randomColor
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       {Array.from({ length: 20 }, (_, i) => <CardColor key={i} onPress= {randomStyle}></CardColor>)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
