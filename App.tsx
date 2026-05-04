import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';

export default function App() {
  return (
    <View style={styles.screen}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector gesture={Gesture.Tap().onEnd(() => scheduleOnRN(() => Keyboard.dismiss()))}>
          <View style={styles.container}>
            <TextInput style={{ backgroundColor: 'red' }} />
            <StatusBar style="auto" />
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    padding: 20
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
