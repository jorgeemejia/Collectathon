import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    FlatList
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-fontawesome';



  type RootStackParamList ={
    Home: undefined;
    Collection: undefined;
    AddToCollection: undefined;
  }
type ItemProps = {backgroundImage: string, name: string};
const Item = ({backgroundImage, name}: ItemProps) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: backgroundImage,
        }}
      />
      <Text>{name}</Text>
    </View>
  );

type Props = NativeStackScreenProps<RootStackParamList, `AddToCollection`>

function AddToCollection({navigation}: Props): JSX.Element {
    const [search, onChangeSearch] = React.useState('Mario');
    const [games, setGames] = React.useState<any[]>([])

    const getGamesFromAPI = async () => {
        try {
        const response = await fetch(`https://api.rawg.io/api/games?key=5b8cab57aec341b282c5566d9ae7250d&search=${search}`)
        const json = await response.json();
        setGames(json.results);
        }
        catch (error) {
            console.error(error);
        }
    }


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
      {games.length != 0 ? 
      (<FlatList
        data={games}
        renderItem={({item}) => <Item backgroundImage={item.background_image} name={item.name} />}
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
    }


});

export default AddToCollection;