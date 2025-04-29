import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import lightColors from "@/themes/colors";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 600,
        marginBottom: 8,
        width: '100%'
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
        marginBottom: 40,
        fontWeight: 500,
        color: lightColors.gray
    }
});

export default function PageHeader({title, description, ...inputView}: any) {
    return (
        <View {...inputView} style={{width: '100%'}}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>)
}
