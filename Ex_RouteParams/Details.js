import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function ({ route }: Props) {
    const { title } = route.params;

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />
            {/* ERRO: Sintaxe incorreta ({{title} → {title}) */}
            <Text>{title}</Text>
        </View>
    );
}