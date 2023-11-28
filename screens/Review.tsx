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
    Explore: undefined;
    Review: undefined;
    WriteReview: undefined;
}
type gameReview = {
    title: string;
    rating: string;
    review: string;
};
type gameReviews = gameReview[];

type Props = NativeStackScreenProps<RootStackParamList, `Review`>

type ItemProps = {title: string, rating: string};
const Item = ({title, rating}: ItemProps) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
      <Text style={styles.itemText}>{rating}</Text>
    </View>
  );

function Review({navigation}: Props): JSX.Element {
    const context = React.useContext(AppContext) as {
        gameReviews: gameReviews;
        setGameReviews: React.Dispatch<React.SetStateAction<gameReviews>>;
      };


  return (
    <View style={styles.screenContainer}>
        <FlatList
        data={context.gameReviews}
        renderItem={({item}) => <Item title={item.title} rating={item.rating} />}
        keyExtractor={item => item.title}
        />
        <View style={styles.plusContainer}>
            <Icon name="plus" size={75} color="#70416d" onPress={() => navigation.navigate('WriteReview')}/>
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
      borderRadius: 10,
      padding: 10
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

export default Review;