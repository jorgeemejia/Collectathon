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

type Props = NativeStackScreenProps<RootStackParamList, `Collection`>

type ItemProps = {backgroundImage: string, name: string};
const Item = ({backgroundImage, name}: ItemProps) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: backgroundImage,
        }}
      />
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );

function Collection({navigation}: Props): JSX.Element {
    const [search, onChangeSearch] = React.useState('Useless Text');
    const context = React.useContext(AppContext) as {
        gameCollection: gameCollection;
        setGameCollection: React.Dispatch<React.SetStateAction<gameCollection>>;
      };


  return (
    <View style={styles.screenContainer}>
        <FlatList
        data={context.gameCollection}
        renderItem={({item}) => <Item backgroundImage={item.background_image} name={item.name} />}
        keyExtractor={item => item.slug}
        />
        <View style={styles.plusContainer}>
            <Icon name="plus" size={75} color="#70416d" onPress={() => navigation.navigate('AddToCollection')}/>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    screenContainer : {
        flex: 1,
        backgroundColor: '#B08FC7',
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
        fontSize: 20
    },
    plusContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    }


});

export default Collection;