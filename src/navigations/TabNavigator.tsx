import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SearchScreen from "../screens/search";
import TicketScreen from "../screens/ticket";
import UserAccountScreen from "../screens/userAccount";
import { COLORS } from "../globals/colors";
import { FONTSIZE } from "../globals/fonts";
import { SPACING } from "../globals/styles";
import CustomIconComponent from "../components/customIconComponent";
import { StyleSheet, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        }
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View style={styles.activeTabBackground}>
              <MaterialCommunityIcons
                name="movie-open-play-outline"
                size={FONTSIZE.size_30}
                color={COLORS.White}
              />
            </View>
          )
        }
      }} />
      <Tabs.Screen name="Search" component={SearchScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View style={styles.activeTabBackground}>
              <MaterialIcons
                name="search"
                size={FONTSIZE.size_30}
                color={COLORS.White}
              />
            </View>
          )
        }
      }} />
      <Tabs.Screen name="Ticket" component={TicketScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View style={styles.activeTabBackground}>
              <Ionicons
                name="ticket-outline"
                size={FONTSIZE.size_40}
                color={COLORS.White}
              />
            </View>
          )
        }
      }} />
      <Tabs.Screen name="User" component={UserAccountScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View style={styles.activeTabBackground}>
              <FontAwesome
                name="user-o"
                size={FONTSIZE.size_30}
                color={COLORS.White}
              />
            </View>
          )
        }
      }} />
    </Tabs.Navigator>
  )
};

const styles = StyleSheet.create({
  activeBarBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10
  }
});

export default TabNavigator;