import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from '@/components/progressbar';
export default function VerifyPhoneScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleEditNumber = () => {
    navigation.goBack();
  };

  const handleResendCode = () => {
    console.log('Resending code...');
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Verifying code:', fullCode);
      navigation.navigate('SecureAccessScreen')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar step={2} totalSteps={5} />

      <View style={styles.content}>
        <Text style={styles.title}>Verify your phone number</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Enter the 6-digit code we texted you at {'\n'}
            +234 8085472417
          </Text>
          <TouchableOpacity onPress={handleEditNumber}>
            <Text style={styles.editNumber}>Edit number</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.resendButton}>Resend code</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.verifyButton, code.join('').length !== 6 && styles.verifyButtonDisabled]}
          onPress={handleVerify}
          disabled={code.join('').length !== 6}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  progressBar: {
    height: 2,
    backgroundColor: '#E2E2E2',
    marginTop: 10,
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: '#FF6B00',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',  // Center vertically
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    flex: 1,  // Allow subtitle to take remaining space
  },
  editNumber: {
    fontSize: 14,
    color: '#FF6B00',
    lineHeight: 20,
    marginLeft: 10, // Space between subtitle and edit number
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  codeInput: {
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendButton: {
    fontSize: 14,
    color: '#FF6B00',
  },
  verifyButton: {
    backgroundColor: '#000080',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10,
  },
  verifyButtonDisabled: {
    opacity: 0.5,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});