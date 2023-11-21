import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Collection from './screens/Collection';
import AddToCollection from './screens/AddToCollection';
import About from './screens/About';
import AppContext from './AppContext';

type RootStackParamList = {
  Home: undefined;
  Collection: undefined;
  AddToCollection: undefined;
  About: undefined;
}
const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [gameCollection, setGameCollection] = React.useState<any[]>([]);

  const contextValue = {
    gameCollection,
    setGameCollection
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home"
                            component={ Home }
                            options={{title: 'Collectathon'}}/>
          <RootStack.Screen name="Collection"
                            component={ Collection }
                            options={{title: 'My Collection'}}/>
          <RootStack.Screen name="AddToCollection"
                            component={ AddToCollection }
                            options={{title: 'My Collection'}}/>
          <RootStack.Screen name="About"
                            component={ About }
                            options={{title: 'About'}}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
