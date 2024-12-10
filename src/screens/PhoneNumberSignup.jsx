import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from '@/components/progressbar';

export default function PhoneNumberScreen() {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('VerifyPhoneScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar step={1} totalSteps={5} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>What's your mobile number?</Text>
          <Text style={styles.subtitle}>We'll use this as your Berre Global Holdings account number</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.phoneContainer}>
            <View style={styles.countryCodeContainer}>
              <Text style={styles.label}>Country</Text>
              <TextInput
                style={styles.countryCodeInput}
                value={countryCode}
                onChangeText={setCountryCode}
                placeholder="+1"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.phoneNumberContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.phoneNumberInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="1234567890"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          
          <View style={styles.spacer} />
          
          <Text style={styles.disclaimer}>
            By providing your phone number, you agree that we may contact you by SMS/text messaging. Data and message rates may apply.
          </Text>
          
          <TouchableOpacity
            style={[styles.button, !phoneNumber && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!phoneNumber}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
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
    lineHeight: 20,
  },
  form: {
    flex: 1,
  },
  phoneContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  countryCodeContainer: {
    flex: 2,
  },
  phoneNumberContainer: {
    flex: 5,
  },
  label: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 8,
  },
  countryCodeInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    padding: 12,
    fontSize: 16,
  },
  phoneNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    padding: 12,
    fontSize: 16,
  },
  spacer: {
    flex: 1,
    minHeight: 200,
  },
  disclaimer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000080',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

