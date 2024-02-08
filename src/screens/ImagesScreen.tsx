import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImagesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Images Screen</Text>
      </View>
    </View>
  );
};

export default ImagesScreen;

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
