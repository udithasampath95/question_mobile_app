import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const CalculatorScreen = () => {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('0');
    const [result, setResult] = useState<number | null>(null);

    const handleSum = () => {
        const first = parseFloat(firstInput) || 0;
        const second = parseFloat(secondInput) || 0;
        setResult(first + second);
    };

    const handleIncrement = () => {
        const val = parseFloat(secondInput) || 0;
        setSecondInput((val + 1).toString());
    };

    const handleDecrement = () => {
        const val = parseFloat(secondInput) || 0;
        setSecondInput((val - 1).toString());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>First Number</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={firstInput}
                    onChangeText={setFirstInput}
                    placeholder="Enter a number"
                />
            </View>

            <Text style={styles.label}>Second Number</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.arrow} onPress={handleIncrement}>
                    <Text style={styles.arrowText}>▲</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={secondInput}
                    onChangeText={text => {
                        const clean = text.replace(/[^0-9.-]/g, '');
                        setSecondInput(clean);
                    }}
                />
                <TouchableOpacity style={styles.arrow} onPress={handleDecrement}>
                    <Text style={styles.arrowText}>▼</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSum}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            <Text style={styles.result}>Total: {result !== null ? result : '--'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginTop: 60,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 10,
    },
    arrow: {
        width: 40,
        height: 40,
        backgroundColor: '#dddddd',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowText: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 16,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default CalculatorScreen;