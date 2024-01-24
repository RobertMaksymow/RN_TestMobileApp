import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  console.log('Hello from console.log');

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={styles.header}>React Native Concepts and Features:</Text>
      </View>
      <View>
        <Text>Splash Screen</Text>
        <Text>Cookies</Text>
        <Text>Login</Text>
        <Text>Authentication by Thumb, Face, PIN</Text>
        <Text>Screens</Text>
        <Text>Buttons and Pressables</Text>
        <Text>Scroll</Text>
        <Text>Chat</Text>
        <Text>Push Notifications</Text>
        <Text>Dark Mode</Text>
        <Text>
          Maps, points on maps, ie Disabled Bays, closest one from my current
          location
        </Text>
        <Text>Fetching data from API ie BTC price</Text>
        <Text>Custom Fonts and Icons</Text>
        <Text>Styling</Text>
        <Text>WebView</Text>
        <Text>Images and Gallery</Text>
        <Text>Navigation by react-native-navigation or react-navigation</Text>
        <Text>CRUD</Text>
        <Text>Firebase Crashlytics and RemoteConfig</Text>
        <Text>Back Button</Text>
        <Text>Modal Window</Text>
        <Text>Alerts, asking for Permissions</Text>
        <Text>E2E Testing</Text>
        <Text>Adverts</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
});

export default App;
