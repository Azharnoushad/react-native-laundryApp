import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { StackNavigator } from './StackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" translucent={false} backgroundColor="#F0F0F0"/>
      <StackNavigator/>
    </Provider>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
