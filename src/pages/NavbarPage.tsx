import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavbarPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = () => {
        console.log("href='/')");
    };

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={handleNavigation}>
                    <Text style={styles.navTitle}>MyApp</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                    <Text style={styles.menuIcon}>{menuOpen ? '✕' : '☰'}</Text>
                </TouchableOpacity>
            </View>

            {menuOpen && (
                <View style={styles.menu}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        placeholderTextColor="#888888"
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        placeholderTextColor="#888888"
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#ffffff',
    },
    navbar: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007bff',
        height: 60,
    },
    navTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    menuIcon: {
        color: 'white',
        fontSize: 24,
    },
    menu: {
        padding: 20,
        backgroundColor: '#f1f1f1',
    },
    searchInput: {
        borderColor: '#cccccc',
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
    },
});
