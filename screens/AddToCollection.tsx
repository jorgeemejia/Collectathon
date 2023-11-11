import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    FlatList,
    Pressable
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-fontawesome';
import AppContext from '../AppContext';



  type RootStackParamList ={
    Home: undefined;
    Collection: undefined;
    AddToCollection: undefined;
  }
  type game = {
    slug: string;
    background_image: string;
    name: string;
  };
  type gameCollection = game[];

type Props = NativeStackScreenProps<RootStackParamList, `AddToCollection`>

function AddToCollection({navigation}: Props): JSX.Element {
    const [search, onChangeSearch] = React.useState('Mario');
    const [gameSearchResults, setGameSearchResults] = React.useState<any[]>([])
    const context = React.useContext(AppContext) as {
      gameCollection: gameCollection;
      setGameCollection: React.Dispatch<React.SetStateAction<gameCollection>>;
    };

    const getGamesFromAPI = async () => {
        try {
        const response = await fetch(`https://api.rawg.io/api/games?key=5b8cab57aec341b282c5566d9ae7250d&search=${search}`)
        const json = await response.json();
        setGameSearchResults(json.results);
        }
        catch (error) {
            console.error(error);
        }
    }
    type ItemProps = {backgroundImage: string, name: string, slug: string};
    const addGameToCollection =  ({backgroundImage, name, slug}: ItemProps) => {
      let newGameCollection = [...context.gameCollection]
      let newGame = {
        "slug" : slug,
        "background_image" : backgroundImage,
        "name" : name
      }
      newGameCollection = [...newGameCollection, newGame]
      context.setGameCollection(newGameCollection);
      console.log('Added Game To Collection Successfully')
    }

    const Item = ({backgroundImage, name, slug}: ItemProps) => (
        <View style={styles.itemContainer}>
          <Image
            style={styles.backgroundImage}
            source={{
              uri: backgroundImage,
            }}
          />
          <Text>{name}</Text>
          <Pressable style={styles.addPressable} onPress={() => addGameToCollection({ backgroundImage, name, slug })}>
            <Text>Add</Text>
          </Pressable>
        </View>
      );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeSearch}
            value={search}
        />
        <Icon name="search" size={30} color="#900" onPress={getGamesFromAPI}/>
      </View>
      {gameSearchResults.length != 0 ? 
      (<FlatList
        data={gameSearchResults}
        renderItem={({item}) => <Item backgroundImage={item.background_image} name={item.name} slug={item.slug} />}
        keyExtractor={item => item.slug}
       />)
       :
       (
        <View></View>
       )
      }
    </View>
  );
}

const styles = StyleSheet.create({
    screenContainer : {
        flex: 1
    },
    searchBarContainer : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    itemContainer : {
      flexDirection: 'row',
      alignItems:  'center',
      gap: 50
    },
    backgroundImage : {
        width: 100,
        height: 100
    },
    addPressable :{
      backgroundColor: 'blue'
    }


});

export default AddToCollection;