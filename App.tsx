import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
type RootStackParamList = {
  Home: undefined;
}
const RootStack = createNativeStackNavigator<RootStackParamList>();




function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home"
                          component={ Home }
                          options={{title: 'Collectathon'}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
