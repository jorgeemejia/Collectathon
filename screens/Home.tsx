import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack'
  import Dpad from '../icons/dPad';
  import LinearGradient from 'react-native-linear-gradient';

  type RootStackParamList ={
    Home: undefined;
    Collection: undefined;
  }

type Props = NativeStackScreenProps<RootStackParamList, `Home`>

function Home({navigation}: Props): JSX.Element {


  return (
    <View style={styles.screenContainer}>
        <View style={styles.gameScreen}></View>
        <View style={styles.allGameButtonsContainer}>
            <Dpad style={styles.dPad}/>
            <View style={styles.menuButtonsContainer}>
                <View style={styles.menuButtonContainerRow}>
                <Pressable style={[styles.menuButton, {backgroundColor:'#FF0000'}]} onPress={() => navigation.navigate('Collection')}>
                    <Text style={styles.menuButtonText}>Collection</Text>
                </Pressable>
                </View>
                <View style={styles.menuButtonContainerRow}>
                    <Pressable style={[styles.menuButton, {backgroundColor:'#00FF00'}]} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.menuButtonText}>Wishlist</Text>
                    </Pressable>
                    <View> 
                    </View>
                    <Pressable style={[styles.menuButton, {backgroundColor:'#1C5D99'}]} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.menuButtonText}>Explore</Text>
                    </Pressable>
                </View>
                <View style={styles.menuButtonContainerRow}>
                    <Pressable style={[styles.menuButton, {backgroundColor:'#FFFF00'}]} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.menuButtonText}>Review</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screenContainer : {
        flex: 1,
        backgroundColor: '#B08FC7',
        alignItems: 'center'
    },
    gameScreen : {
        backgroundColor: 'black',
        width: '80%',
        height: '50%',
        marginTop: 30,
        borderRadius: 10
    },
    allGameButtonsContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginTop: 20
    },
    dPad : {
        width: 100,
        height: 100
    },
    menuButtonsContainer : {
    },
    menuButtonContainerRow : {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    menuButton : {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        borderRightColor: 'black',
        borderRightWidth: 5,
    },
    menuButtonText : {
        fontSize: 20,
    }


});

export default Home;