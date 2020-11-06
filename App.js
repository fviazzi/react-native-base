// External Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Internal Modules
import Example from './src/screens/Example/Example';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Example />
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
