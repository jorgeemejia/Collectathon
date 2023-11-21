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
    About: undefined;
  }

type Props = NativeStackScreenProps<RootStackParamList, `About`>

function About({navigation}: Props): JSX.Element {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.description}>
       Collectathon is a convenient app for video game collectors. 
       Collectathon lets you easily catalog your finds, see what else is out there, and share your thoughts about your own collection. 
      </Text>
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    screenContainer : {
        flex: 1,
        backgroundColor: '#B08FC7',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
      description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
      },
      version: {
        fontSize: 14,
        color: 'white',
      },



});

export default About;