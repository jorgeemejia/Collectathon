import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Collection from './screens/Collection';
import AddToCollection from './screens/AddToCollection';
import About from './screens/About';
import Explore from './screens/Explore';
import Wishlist from './screens/Wishlist';
import Review from './screens/Review';
import WriteReview from './screens/WriteReview';
import AppContext from './AppContext';


type RootStackParamList = {
  Home: undefined;
  Collection: undefined;
  AddToCollection: undefined;
  About: undefined;
  Explore: undefined;
  Wishlist: undefined;
  Review: undefined;
  WriteReview: undefined;
}
const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [gameCollection, setGameCollection] = React.useState<any[]>([]);
  const [gameWishlist, setGameWishlist] = React.useState<any[]>([]);
  const [gameReviews, setGameReviews] = React.useState<any[]>([]);

  const contextValue = {
    gameCollection,
    setGameCollection,
    gameWishlist,
    setGameWishlist,
    gameReviews,
    setGameReviews
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
                            options={{title: 'Collection'}}/>
          <RootStack.Screen name="AddToCollection"
                            component={ AddToCollection }
                            options={{title: 'Collection'}}/>
          <RootStack.Screen name="About"
                            component={ About }
                            options={{title: 'About'}}/>
          <RootStack.Screen name="Explore"
                            component={ Explore }
                            options={{title: 'Explore'}}/>
          <RootStack.Screen name="Wishlist"
                            component={ Wishlist }
                            options={{title: 'Wishlist'}}/>
          <RootStack.Screen name="Review"
                            component={ Review }
                            options={{title: 'Review'}}/>
          <RootStack.Screen name="WriteReview"
                            component={ WriteReview }
                            options={{title: 'Write Review'}}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
