import React from "react";
import { View, Text } from "react-native";
import Avatar from "../Avatar";
import styles from './styles';

const Profile = () => {
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://avatars.githubusercontent.com/u/89089202?v=4"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Laciene
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>

            </View>
        </View>
    );
}

export default Profile;