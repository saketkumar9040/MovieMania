import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SearchScreen from "../screens/search";
import TicketScreen from "../screens/ticket";
import UserAccountScreen from "../screens/userAccount";
import { COLORS } from "../globals/colors";
import { FONTSIZE } from "../globals/fonts";
import { SPACING } from "../globals/styles";
import CustomIconComponent from "../components/customIconComponent";
import { View } from "react-native";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          backgroundColor:COLORS.Black,
          borderTopWidth:0,
          height:SPACING.space_10*10,
        }
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} options={{
        tabBarShowLabel:false,
        tabBarIcon:({})=>{
          return (
            <View>

            </View>
          )
        }
      }}/>
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Ticket" component={TicketScreen} />
      <Tabs.Screen name="User" component={UserAccountScreen} />
    </Tabs.Navigator>
  )
}

export default TabNavigator;