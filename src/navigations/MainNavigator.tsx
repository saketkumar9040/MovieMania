import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import MovieDetailsScreen from "../screens/movieDetails";
import SeatBookingScreen from "../screens/seatBooking";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{animation:"default"}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{animation:"slide_from_right"}}
      />
      <Stack.Screen
        name="SeatBooking"
        component={SeatBookingScreen}
        options={{animation:"slide_from_bottom"}}
      />
    </Stack.Navigator>
  )
};

export default MainNavigator;

