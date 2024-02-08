import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import ButtonsScreen from './src/screens/ButtonsScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyAccountScreen from './src/screens/MyAccountScreen';

function App(): React.JSX.Element {
  console.log('Hello from console.log');

  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar />
        {/* <ScrollView>
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
        <View>
          <Text>Text properties:</Text>
          <Text>- numberOfLines={1}</Text>
          <Text numberOfLines={1}>
            Really really really long text that is going be truncated, because
            it is a very long long text
          </Text>
        </View>
        <View>
          <Text>Image properties:</Text>
          <Text>source=require('./src/dummy.jpg')</Text>
          <Image style={styles.image} source={require('./src/dummy.jpg')} />
          <Text>blurRadius={10}</Text>
          <Image
            blurRadius={15}
            style={styles.image}
            source={require('./src/dummy.jpg')}
          />
          <Text>fadeDuration={1000} - Android only</Text>
          <Image
            fadeDuration={5000}
            style={styles.image}
            source={require('./src/dummy.jpg')}
          />
          <Text>Image from Internet</Text>
          <Image
            style={styles.image}
            source={{
              width: 200,
              height: 200,
              uri: 'https://picsum.photos/200',
            }}
          />
        </View>
        <View>
          <Text>Touchable Components:</Text>
          <Text>TouchableWithoutFeedback</Text>
          <TouchableWithoutFeedback
            onPress={() => console.log('Image Clicked')}>
            <Image style={styles.image} source={require('./src/dummy.jpg')} />
          </TouchableWithoutFeedback>
          <Text>TouchableOpacity</Text>
          <TouchableOpacity onPress={() => console.log('Image Clicked')}>
            <Image style={styles.image} source={require('./src/dummy.jpg')} />
          </TouchableOpacity>
          <Text>TouchableHighlight</Text>
          <TouchableHighlight onPress={() => console.log('Image Clicked')}>
            <Image style={styles.image} source={require('./src/dummy.jpg')} />
          </TouchableHighlight>
          <Text>TouchableNativeFeedback - Android only</Text>

          <TouchableNativeFeedback onPress={() => console.log('Image Clicked')}>
            <View
              style={{
                width: 200,
                height: 100,
                backgroundColor: 'dodgerblue',
              }}>
              <Text>Works only on View not Images</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View>
          <Text>Buttons: 1h 04min </Text>
        </View>
      </ScrollView> */}
        <HomeScreen />
        <ButtonsScreen />
        <ImagesScreen />
        <MyAccountScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  image: {
    height: 90,
    width: 90,
  },
});

export default App;
