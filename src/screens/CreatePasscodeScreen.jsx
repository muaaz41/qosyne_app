import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProgressBar } from '@/components/progressbar';
import { NumericKeypad } from '@/components/NumericKeypad';

export default function CreatePasscodeScreen() {
  const [passcode, setPasscode] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const handleKeyPress = (key) => {
    if (key === 'backspace') {
      setPasscode(prev => prev.slice(0, -1));
    } else if (passcode.length < 4) {
      setPasscode(prev => prev + key);
    }

    // Navigate to repeat passcode screen when 4 digits are entered
    if (passcode.length === 3 && key !== 'backspace') {
      setTimeout(() => {
        navigation.navigate('RepeatPasscodeScreen', { passcode: passcode + key });
      }, 300);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar step={3} totalSteps={5} />

      <View style={styles.content}>
        <Text style={styles.title}>Create your passcode</Text>
        <Text style={styles.subtitle}>
          This will be used for logging in and access your app, so please don't share it with anyone.
        </Text>

        <View style={styles.dotsContainer}>
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index < passcode.length && styles.dotFilled
              ]}
            />
          ))}
        </View>

        <NumericKeypad onKeyPress={handleKeyPress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  stepText: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 40,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  dotFilled: {
    backgroundColor: '#000080',
    borderColor: '#000080',
  },
});

