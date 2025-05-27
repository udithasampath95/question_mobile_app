import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomDrawer(props) {
    const [search, setSearch] = useState('');

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={18} color="#555555" />
                <TextInput
                    placeholder="Search..."
                    style={styles.input}
                    value={search}
                    onChangeText={setSearch}
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={() => setSearch('')}>
                        <Icon name="close" size={18} color="#888888" />
                    </TouchableOpacity>
                )}
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#cccccc',
        backgroundColor: '#ffffff',
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
    },
});