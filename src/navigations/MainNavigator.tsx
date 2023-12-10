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
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <Stack.Screen
        name="SeatBooking"
        component={SeatBookingScreen}
      />
    </Stack.Navigator>
  )
};

export default MainNavigator;

