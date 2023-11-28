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
    Explore: undefined;
    Review: undefined;
    WriteReview: {propTitle: string, propRating: string, propReview: string};
}
type gameReview = {
    title: string;
    rating: string;
    review: string;
};
type gameReviews = gameReview[];

type Props = NativeStackScreenProps<RootStackParamList, `WriteReview`>

function WriteReview({navigation, route}: Props): JSX.Element {
  const context = React.useContext(AppContext) as {
    gameReviews: gameReviews;
    setGameReviews: React.Dispatch<React.SetStateAction<gameReviews>>;
  };
  const {propTitle, propRating, propReview} = route.params;
  const [title, setTitle] = React.useState(propTitle);
  const [rating, setRating ] = React.useState(propRating);
  const [review, setReview] = React.useState(propReview);

  const addReview =  () => {
    if (title !== '' && rating !== '' && review !== '') {
      let newGameReviews = [...context.gameReviews];
      let newGameReview:gameReview = {
        title : title,
        rating : rating,
        review : review
      }
      newGameReviews = [...newGameReviews, newGameReview];
      context.setGameReviews(newGameReviews);
      setTitle('');
      setRating('');
      setReview('');
      console.log('Added review successfully');
      navigation.navigate('Review');
    }
  }

  const clearReview =  () => {
    setTitle('');
    setRating('');
    setReview('');
  }

  const deleteReview = () => {
    const updatedGameReviews = context.gameReviews.filter(
      (review) => review.title !== title
    );
    context.setGameReviews(updatedGameReviews);
    navigation.navigate('Review');
  }

  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput
        style={styles.smallInput}
        placeholder='Title'
        value={title}
        onChangeText={setTitle}
      />
      <Text>Rating</Text>
      <TextInput
        style={styles.smallInput}
        placeholder='Rating'
        onChangeText={setRating}
        value={rating}
      />
      <Text>Review</Text>
      <TextInput
        style={styles.largeInput}
        placeholder='Review'
        multiline={true}
        onChangeText={setReview}
        value={review}
      />
      <View style={styles.buttonContainer}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={addReview}>
                <Text style={styles.textStyle}>Add</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={clearReview}>
                <Text style={styles.textStyle}>Clear</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('Review')}>
                <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={deleteReview}>
                <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
            </View>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#B08FC7'

    },
    smallInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      backgroundColor: 'white'
    },
    largeInput: {
      height: 120,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      textAlignVertical: 'top', // This property is important for multiline input
      backgroundColor: 'white'
    },
    buttonContainer : {
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
    }
  });

// Export the component
export default WriteReview;