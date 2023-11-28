import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    FlatList,
    Pressable,
    Modal
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-fontawesome';
import AppContext from '../AppContext';


  type RootStackParamList ={
    Home: undefined;
    Collection: undefined;
    AddToCollection: undefined;
    Explore: undefined;
  }
  type game = {
    slug: string;
    background_image: string;
    name: string;
  };
  type gameCollection = game[];
  type gameWishlist = game[];

type Props = NativeStackScreenProps<RootStackParamList, `Explore`>

function Explore({navigation}: Props): JSX.Element {
    const [search, onChangeSearch] = React.useState('');
    const [gameSearchResults, setGameSearchResults] = React.useState<any[]>([])
    const [showModal, setShowModal] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<game | null>(null);

    const context = React.useContext(AppContext) as {
      gameCollection: gameCollection;
      setGameCollection: React.Dispatch<React.SetStateAction<gameCollection>>;
      gameWishlist: gameWishlist;
      setGameWishlist: React.Dispatch<React.SetStateAction<gameCollection>>;
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

    const addGameToCollection =  () => {
      if (selectedItem !== null) {
        let newGameCollection = [...context.gameCollection];
        newGameCollection = [...newGameCollection, selectedItem];
        context.setGameCollection(newGameCollection);
        setSelectedItem(null);
        setShowModal(false);
        console.log('Added Game To Collection Successfully');
      }
    }
    const addGameToWishlist =  () => {
      if (selectedItem !== null) {
        let newGameWishlist = [...context.gameWishlist];
        newGameWishlist = [...newGameWishlist, selectedItem];
        context.setGameWishlist(newGameWishlist);
        setSelectedItem(null);
        setShowModal(false);
        console.log('Added Game To Wishlist Successfully');
      }
    }
    const handleCancel =  () => {
      setSelectedItem(null);
      setShowModal(false);
    }
    const Item = ({backgroundImage, name, slug}: ItemProps) => (
        <Pressable style={styles.itemContainer} onPress={() => openModal({ backgroundImage, name, slug })}>
          <Image
            style={styles.backgroundImage}
            source={{
              uri: backgroundImage,
            }}
          />
          <Text style={styles.itemText}>{name}</Text>
        </Pressable>
      );

    const openModal = ({backgroundImage, name, slug}: ItemProps) => {
      setShowModal(true);
      setSelectedItem(
        {
          "slug" : slug,
          "background_image" : backgroundImage,
          "name" : name
        }
      )
    };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeSearch}
            value={search}
        />
        <Icon name="search" size={30} color="#70416d" onPress={getGamesFromAPI}/>
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
      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Add <Text style={styles.boldText}>{selectedItem?.name}</Text> to collection or wishlist?</Text>
            <View style={styles.modalButtonContainer}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={addGameToCollection}>
                <Text style={styles.textStyle}>Collection</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={addGameToWishlist}>
                <Text style={styles.textStyle}>Wishlist</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleCancel}>
                <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>
          </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    screenContainer : {
        flex: 1,
        backgroundColor: '#B08FC7'
    },
    searchBarContainer : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: '#f5f5f5',
      },
    itemContainer : {
      flexDirection: 'row',
      alignItems:  'center',
      gap: 50,
      backgroundColor: '#f5f5f5',
      margin: 10,
      borderRadius: 10
    },
    backgroundImage : {
      width: 100,
      height: 100,
      borderRadius: 10
    },
    itemText : {
      fontSize: 15
  },
    addPressable :{
      backgroundColor: '#70416d',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer : {
      margin: 20,
      backgroundColor: '#70416d',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,    }
    },
    modalButtonContainer : {
        flexDirection: 'row',
        gap: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'white'
    },
    boldText: {
        fontWeight: 'bold',
        // Other styles for bold text
      },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },


});

export default Explore;