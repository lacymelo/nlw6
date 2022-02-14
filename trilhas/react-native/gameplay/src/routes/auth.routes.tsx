import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//importações de telas
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";

const AuthRoutes = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
}

export default AuthRoutes;