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

type Props = NativeStackScreenProps<RootStackParamList, `Collection`>

  const DATA = [
    {
        "slug": "mario",
        "name": "mario",
        "playtime": 0,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 9,
                    "name": "itch.io",
                    "slug": "itch"
                }
            }
        ],
        "released": "2018-07-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/screenshots/1d7/1d75b9d60cb5884a0b19d21df8557c0c.jpg",
        "rating": 0.0,
        "rating_top": 0,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 1,
                "percent": 33.33
            },
            {
                "id": 3,
                "title": "meh",
                "count": 1,
                "percent": 33.33
            },
            {
                "id": 1,
                "title": "skip",
                "count": 1,
                "percent": 33.33
            }
        ],
        "ratings_count": 3,
        "reviews_text_count": 0,
        "added": 5,
        "added_by_status": {
            "owned": 3,
            "toplay": 1,
            "playing": 1
        },
        "metacritic": null,
        "suggestions_count": 77,
        "updated": "2023-04-28T15:14:43",
        "id": 164830,
        "score": "43.06428",
        "clip": null,
        "tags": [
            {
                "id": 1598,
                "name": "mario",
                "slug": "mario",
                "language": "eng",
                "games_count": 1299,
                "image_background": "https://media.rawg.io/media/games/4e9/4e928ff4b4e3c3f5acfda38b98a4cf65.jpg"
            }
        ],
        "esrb_rating": null,
        "user_game": null,
        "reviews_count": 3,
        "community_rating": 0,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/screenshots/1d7/1d75b9d60cb5884a0b19d21df8557c0c.jpg"
            },
            {
                "id": 1219126,
                "image": "https://media.rawg.io/media/screenshots/461/461c3cccb4e4e0af6ea7d7a07c1cf83b.jpg"
            },
            {
                "id": 1219127,
                "image": "https://media.rawg.io/media/screenshots/987/9878fa0967d4949d77b607d3d8c96cb5.jpg"
            },
            {
                "id": 1219129,
                "image": "https://media.rawg.io/media/screenshots/1d7/1d75b9d60cb5884a0b19d21df8557c0c.jpg"
            }
        ],
        "parent_platforms": [
            {
                "platform": {
                    "id": 1,
                    "name": "PC",
                    "slug": "pc"
                }
            }
        ],
        "genres": []
    },
    {
        "slug": "mario-bros",
        "name": "Mario Bros.",
        "playtime": 3,
        "platforms": [
            {
                "platform": {
                    "id": 8,
                    "name": "Nintendo 3DS",
                    "slug": "nintendo-3ds"
                }
            },
            {
                "platform": {
                    "id": 10,
                    "name": "Wii U",
                    "slug": "wii-u"
                }
            },
            {
                "platform": {
                    "id": 11,
                    "name": "Wii",
                    "slug": "wii"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            }
        ],
        "released": "2006-11-19",
        "tba": false,
        "background_image": "https://media.rawg.io/media/screenshots/f22/f22857f426275f7a09d865a2ad2376b9.jpg",
        "rating": 3.69,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 25,
                "percent": 55.56
            },
            {
                "id": 3,
                "title": "meh",
                "count": 13,
                "percent": 28.89
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 5,
                "percent": 11.11
            },
            {
                "id": 1,
                "title": "skip",
                "count": 2,
                "percent": 4.44
            }
        ],
        "ratings_count": 44,
        "reviews_text_count": 1,
        "added": 90,
        "added_by_status": {
            "yet": 1,
            "owned": 26,
            "beaten": 35,
            "toplay": 3,
            "dropped": 23,
            "playing": 2
        },
        "metacritic": null,
        "suggestions_count": 138,
        "updated": "2023-09-12T14:40:24",
        "id": 24919,
        "score": "32.70288",
        "clip": null,
        "tags": [
            {
                "id": 5816,
                "name": "console",
                "slug": "console",
                "language": "eng",
                "games_count": 1389,
                "image_background": "https://media.rawg.io/media/games/45d/45da4dc311d84b79230317d7b24a3dec.jpg"
            },
            {
                "id": 731,
                "name": "NES",
                "slug": "nes",
                "language": "eng",
                "games_count": 1335,
                "image_background": "https://media.rawg.io/media/games/e2b/e2bab181cb77e118dd5d11824a1c84d0.jpg"
            },
            {
                "id": 1598,
                "name": "mario",
                "slug": "mario",
                "language": "eng",
                "games_count": 1299,
                "image_background": "https://media.rawg.io/media/games/4e9/4e928ff4b4e3c3f5acfda38b98a4cf65.jpg"
            },
            {
                "id": 3075,
                "name": "coins",
                "slug": "coins",
                "language": "eng",
                "games_count": 5402,
                "image_background": "https://media.rawg.io/media/screenshots/89e/89e8e75cfae65a24b478e0382a841b9d.jpg"
            }
        ],
        "esrb_rating": null,
        "user_game": null,
        "reviews_count": 45,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/screenshots/f22/f22857f426275f7a09d865a2ad2376b9.jpg"
            },
            {
                "id": 248365,
                "image": "https://media.rawg.io/media/screenshots/ea4/ea4769e047df0c40f692f4726fb064ce.jpg"
            },
            {
                "id": 248366,
                "image": "https://media.rawg.io/media/screenshots/02f/02f476e74c65d1ec9c232727669e1730.jpg"
            },
            {
                "id": 261809,
                "image": "https://media.rawg.io/media/screenshots/252/252c622b5334c3df011da410c3b84e6d.jpg"
            },
            {
                "id": 261810,
                "image": "https://media.rawg.io/media/screenshots/490/490b3b15e68a9ef0176e3b917c034210.jpg"
            },
            {
                "id": 261811,
                "image": "https://media.rawg.io/media/screenshots/6c4/6c4a4ac34be54f557949f5630567c5bf.jpg"
            },
            {
                "id": 261812,
                "image": "https://media.rawg.io/media/screenshots/236/2365b83f184111e9ed869fec7ef562b8.jpg"
            }
        ],
        "parent_platforms": [
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo",
                    "slug": "nintendo"
                }
            }
        ],
        "genres": []
    },
    {
        "slug": "mario-bros-1983",
        "name": "Mario Bros. (1983)",
        "playtime": 0,
        "platforms": [
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 8,
                    "name": "Nintendo 3DS",
                    "slug": "nintendo-3ds"
                }
            },
            {
                "platform": {
                    "id": 10,
                    "name": "Wii U",
                    "slug": "wii-u"
                }
            },
            {
                "platform": {
                    "id": 11,
                    "name": "Wii",
                    "slug": "wii"
                }
            },
            {
                "platform": {
                    "id": 24,
                    "name": "Game Boy Advance",
                    "slug": "game-boy-advance"
                }
            },
            {
                "platform": {
                    "id": 49,
                    "name": "NES",
                    "slug": "nes"
                }
            },
            {
                "platform": {
                    "id": 166,
                    "name": "Commodore / Amiga",
                    "slug": "commodore-amiga"
                }
            },
            {
                "platform": {
                    "id": 28,
                    "name": "Atari 7800",
                    "slug": "atari-7800"
                }
            },
            {
                "platform": {
                    "id": 31,
                    "name": "Atari 5200",
                    "slug": "atari-5200"
                }
            },
            {
                "platform": {
                    "id": 23,
                    "name": "Atari 2600",
                    "slug": "atari-2600"
                }
            },
            {
                "platform": {
                    "id": 25,
                    "name": "Atari 8-bit",
                    "slug": "atari-8-bit"
                }
            },
            {
                "platform": {
                    "id": 50,
                    "name": "Atari XEGS",
                    "slug": "atari-xegs"
                }
            }
        ],
        "stores": null,
        "released": "1983-01-01",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/8ef/8efa90f72b466c632d7f95dd02be5e50.jpg",
        "rating": 3.63,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 62,
                "percent": 49.21
            },
            {
                "id": 3,
                "title": "meh",
                "count": 41,
                "percent": 32.54
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 16,
                "percent": 12.7
            },
            {
                "id": 1,
                "title": "skip",
                "count": 7,
                "percent": 5.56
            }
        ],
        "ratings_count": 125,
        "reviews_text_count": 1,
        "added": 293,
        "added_by_status": {
            "yet": 9,
            "owned": 75,
            "beaten": 98,
            "toplay": 17,
            "dropped": 93,
            "playing": 1
        },
        "metacritic": null,
        "suggestions_count": 202,
        "updated": "2023-11-04T23:03:34",
        "id": 52434,
        "score": "30.703144",
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 210696,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 35880,
                "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
                "id": 411,
                "name": "cooperative",
                "slug": "cooperative",
                "language": "eng",
                "games_count": 4352,
                "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
            }
        ],
        "esrb_rating": null,
        "user_game": null,
        "reviews_count": 126,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/8ef/8efa90f72b466c632d7f95dd02be5e50.jpg"
            },
            {
                "id": 1708380,
                "image": "https://media.rawg.io/media/screenshots/ea8/ea8078bbe72f544be35c7616787ecb15.jpg"
            },
            {
                "id": 1708381,
                "image": "https://media.rawg.io/media/screenshots/419/419746d3b22931842dbaf43c162c29ce.jpg"
            },
            {
                "id": 1708382,
                "image": "https://media.rawg.io/media/screenshots/59a/59ad66928669a0790a6bd83b402a9a9b_a1SMi5I.jpg"
            },
            {
                "id": 1708383,
                "image": "https://media.rawg.io/media/screenshots/010/010cd9a5fd719dfeecd6c441b1973e15.jpg"
            },
            {
                "id": 1708384,
                "image": "https://media.rawg.io/media/screenshots/cd3/cd32fd7360d4e9389a5ba7df404cbe36.jpg"
            },
            {
                "id": 1708385,
                "image": "https://media.rawg.io/media/screenshots/b2e/b2e8f15a030fb05e09e0ab01dfbb12c3.jpg"
            }
        ],
        "parent_platforms": [
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo",
                    "slug": "nintendo"
                }
            },
            {
                "platform": {
                    "id": 9,
                    "name": "Atari",
                    "slug": "atari"
                }
            },
            {
                "platform": {
                    "id": 10,
                    "name": "Commodore / Amiga",
                    "slug": "commodore-amiga"
                }
            }
        ],
        "genres": []
    }
]
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

function Collection({navigation}: Props): JSX.Element {
    const [search, onChangeSearch] = React.useState('Useless Text');


  return (
    <View style={styles.screenContainer}>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item backgroundImage={item.background_image} name={item.name} />}
        keyExtractor={item => item.slug}
        />
        <Icon name="plus" size={30} color="#900" onPress={() => navigation.navigate('AddToCollection')}/>
    </View>
  );
}
const styles = StyleSheet.create({
    screenContainer : {
        flex: 1
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

export default Collection;