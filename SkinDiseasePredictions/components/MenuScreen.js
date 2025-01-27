import React, { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

const MenuScreen = ({ onClose }) => {
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
            <View style={styles.menuItem}>
                <Ionicons style={{ paddingRight: 10 }} name="location" size={24} color="white" />
                <View>
                    <Text style={styles.menuText}>Near by clinic</Text>
                    <Text style={styles.menuDescription}>Find out near by skin care clinic</Text>
                </View>
            </View>
            <View style={styles.menuItem}>
                <Ionicons style={{ paddingRight: 10 }} name="scan-circle-sharp" size={24} color="white" />
                <View>
                    <Text style={styles.menuText}>Scan history</Text>
                    <Text style={styles.menuDescription}>Details history of your search/scan</Text>
                </View>
            </View>
            <View style={styles.menuItem}>
                <Ionicons style={{ paddingRight: 10 }} name="document-text" size={24} color="white" />
                <View>
                    <Text style={styles.menuText}>Support</Text>
                    <Text style={styles.menuDescription}>We are happy to help you</Text>
                </View>
            </View>
            <View style={styles.menuItem}>
                <Ionicons style={{ paddingRight: 10 }} name="medical-sharp" size={24} color="white" />
                <View>
                    <Text style={styles.menuText}>Saved Medicine</Text>
                    <Text style={styles.menuDescription}>Medicine saved by you during scan disease</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'rgb(97,72,194)',
        padding: 20,
        width: 300,
        height: '100%',
        left: 390,
        zIndex: 2,
        paddingTop: 50
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeText: {
        fontSize: 30,
        color: 'rgb(97,72,194)',
        backgroundColor: 'white',
        paddingHorizontal: 12,
        borderRadius: 100,

        // :

    },
    menuItem: {
        marginVertical: 20,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    menuText: {
        fontSize: 18,
        color: '#fff',
    },
    menuDescription: {
        fontSize: 14,
        color: '#fff',
    },
});

export default MenuScreen;
