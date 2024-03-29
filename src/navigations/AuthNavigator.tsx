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
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name='Login'
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name='SignUp'
                        component={SignUpScreen}
                    />
                </Stack.Navigator>
            ) : (
                <MainNavigator />
            )
            }
        </NavigationContainer>
    )
}

export default AuthNavigator;
