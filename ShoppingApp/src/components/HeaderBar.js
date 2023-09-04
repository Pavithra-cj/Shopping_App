import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: '7%',
        borderWidth: 5,
        borderColor: '#000000',
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 40,
        justifyContent: 'space-around',
        fontFamily: 'Comic-sans MS',
        fontStyle: 'italic',
        color: '#272ef2',
    },
});

export class HeaderBar extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Best Deals</Text>
        </View>
    )
  }
}

export default HeaderBar