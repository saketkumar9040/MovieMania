import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    const isAuth = true;
    return (
        <NavigationContainer>
            {!isAuth ? (
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            ) : (
                <MainNavigator />
            )
            }
        </NavigationContainer>
    )
}

export default AuthNavigator
