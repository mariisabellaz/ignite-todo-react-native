import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface Props {
  isDarkMode: boolean;
}

export function Header({ isDarkMode } : Props) {
  return (
    <SafeAreaView style={{ backgroundColor: isDarkMode ? '#191932' : '#273FAD' }}>
      <View style={[styles.header, { backgroundColor: isDarkMode ? '#191932' : '#273FAD' }]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
