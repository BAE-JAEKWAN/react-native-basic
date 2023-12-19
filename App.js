import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const getFullName = (name, extension) => {
    return `${name}.${extension}`
  }
  const name = '네오'
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: 'http://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <Text>안녕? 난 {getFullName('neo', 'quan')}이야.</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="글자 입력 쌉 가능"
        />
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
});
