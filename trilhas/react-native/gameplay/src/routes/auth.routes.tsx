import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//importações de telas
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentDetails";
import AppointmentCreate from "../screens/AppointmentCreate";
import { theme } from "../global/styles/theme";
import Header from "../components/Header";

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

            <Stack.Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
                options={{
                    headerShown: true,
                    header: () => <Header title="Agendar Partida"/>
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthRoutes;