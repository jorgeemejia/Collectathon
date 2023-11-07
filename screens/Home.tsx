import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack'

  type RootStackParamList ={
    Home: undefined;
    Collection: undefined;
  }

type Props = NativeStackScreenProps<RootStackParamList, `Home`>

function Home({navigation}: Props): JSX.Element {


  return (
    <View style={styles.screenContainer}>
        <View style={styles.menuButtonContainer}>
            <View style={styles.menuButtonContainerRow}>
            <Pressable style={[styles.menuButton, {backgroundColor:'red'}]} onPress={() => navigation.navigate('Collection')}>
                <Text style={styles.menuButtonText}>Collection</Text>
            </Pressable>
            </View>
            <View style={styles.menuButtonContainerRow}>
                <Pressable style={[styles.menuButton, {backgroundColor:'green'}]} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.menuButtonText}>Wishlist</Text>
                </Pressable>
                <View> 
                </View>
                <Pressable style={[styles.menuButton, {backgroundColor:'blue'}]} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.menuButtonText}>Explore</Text>
                </Pressable>
            </View>
            <View style={styles.menuButtonContainerRow}>
                <Pressable style={[styles.menuButton, {backgroundColor:'yellow'}]} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.menuButtonText}>Review</Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screenContainer : {
        flex: 1
    },
    menuButtonContainer : {
    },
    menuButtonContainerRow : {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    menuButton : {
        padding: 10,
        borderRadius: 10,
        margin: 10
    },
    menuButtonText : {
        fontSize: 20,
    }


});

export default Home;