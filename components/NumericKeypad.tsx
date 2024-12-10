import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NumericKeypadProps {
  onKeyPress: (key: string) => void;
}

export function NumericKeypad({ onKeyPress }: NumericKeypadProps) {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'backspace']
  ];

  return (
    <View style={styles.keypad}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.key,
                !key && styles.emptyKey,
                key === 'backspace' && styles.backspaceKey
              ]}
              onPress={() => key && onKeyPress(key)}
            >
              {key === 'backspace' ? (
                <Text style={styles.backspaceText}>{'<'}</Text>
              ) : (
                <Text style={styles.keyText}>{key}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  keypad: {
    width: '100%',
    marginTop: 50,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  key: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyKey: {
    backgroundColor: 'transparent',
  },
  backspaceKey: {
    backgroundColor: '#F5F5F5',
  },
  keyText: {
    fontSize: 24,
    color: '#000',
  },
  backspaceText: {
    fontSize: 24,
    color: '#000',
  },
});

