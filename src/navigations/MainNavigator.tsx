import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import MovieDetailsScreen from "../screens/movieDetails";
import SeatBookingScreen from "../screens/seatBooking";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }}  />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SeatBooking" component={SeatBookingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default MainNavigator;

