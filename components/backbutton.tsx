import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
      <Text style={styles.text}>{'<'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});

