import { View, Text, TextInput, TouchableOpacity,Dimensions } from 'react-native';
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
  baseImagePath } from '../../api/apiCalls';

  const {width,height} =Dimensions.get("window");

const HomeScreen = ({ navigationt, route }: any) => {
  const [searchText, setSearchText] = useState("");
  const []
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