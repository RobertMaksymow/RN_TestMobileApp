import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ButtonsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Buttons Screen</Text>
      </View>
    </View>
  );
};

export default ButtonsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'green',
  },
  header: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
