import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

interface Props {
    isDarkMode: boolean;
}

export function Header({ isDarkMode }: Props) {
    return (
        <View style={[styles.header, {backgroundColor: isDarkMode ? '#191932' : '#273FAD'}]}>
            <Text style={[styles.headerText, {color: isDarkMode ? '#E1E1E6' : '#FFF'}]}>to.</Text>
            <Text style={[styles.headerText, {
                fontFamily: 'Poppins-SemiBold',
                color: isDarkMode ? '#E1E1E6' : '#FFF'
            }]}>do</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 44,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Poppins-Regular',
    }
});
