import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//importações de telas
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentDetails";
import { theme } from "../global/styles/theme";

const AuthRoutes = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: theme.colors.secondary100 }
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

            <Stack.Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
        </Stack.Navigator>
    );
}

export default AuthRoutes;