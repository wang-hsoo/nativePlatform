import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{ useEffect } from 'react';

export default function App() {

  const sendMessage = () => {
    if (window.electron) {
      window.electron.sendMessage('message', 'start electron');
    }
  };

  useEffect(() => {
    sendMessage();
    console.log("window 콘솔",window)
    //electron 실행 여부 확인
    if (window.electron) {
      window.electron.onMessage('reply', (data) => {
        console.log(data);
      });
    }
  }, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
