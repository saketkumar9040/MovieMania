import { View, Text, TextInput, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import { COLORS } from '../../globals/colors';
import { FONTSIZE } from '../../globals/fonts';

import {
  upcomingMoviesURL,
  nowPlayingMoviesURL,
  popularMoviesURL,
  baseImagePath
} from '../../api/apiCalls';

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigationt, route }: any) => {
  const [searchText, setSearchText] = useState("");
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);

  if (nowPlayingMoviesList === undefined || nowPlayingMoviesList === null || popularMoviesList === undefined || popularMoviesList === null) {
    return (
      <ActivityIndicator
        size={60}
        color={COLORS.Orange}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.Black }}
      />
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchTextInput}
          value={searchText}
          placeholder='Search your favourite movie'
          placeholderTextColor={COLORS.WhiteRGBA50}
          onChangeText={(e) => {
            setSearchText(e)
          }}
        />
        <TouchableOpacity>
          <FontAwesome
            name="search" size={FONTSIZE.size_24} color={COLORS.Orange}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;