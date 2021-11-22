import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import { Cronometro } from './src/pages/Cronometro';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cronometro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
});
