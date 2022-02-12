import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//importações de telas
import SignIn from "./screens/SignIn";

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;