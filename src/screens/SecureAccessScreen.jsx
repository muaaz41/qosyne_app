import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from '@/components/progressbar';

const faceIdImage = require('@/assets/images/face-id.png'); 
const lockImage = require('@/assets/images/lock.png'); 

export default function SecureAccessScreen() {
  const navigation = useNavigation();
  const [faceIdConfirmed, setFaceIdConfirmed] = useState(false);

  const handleFaceID = () => {
    Alert.alert(
      'Confirm Face ID',
      'Do you want to allow "Firsthive" to use Face ID? This allows you to login to Firsthive using Face ID.',
      [
        {
          text: "Don't Allow",
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setFaceIdConfirmed(true); // Update state to show checkmark
            // Hide checkmark after 2 seconds
            setTimeout(() => {
              setFaceIdConfirmed(false);
            }, 2000);
          },
        },
      ],
    );
  };

  const handlePasscodeOnly = () => {
    navigation.navigate('CreatePasscodeScreen', { useFaceID: false });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar step={3} totalSteps={5} />

      <View style={styles.content}>
        <Text style={styles.title}>Secure your access</Text>
        <Text style={styles.subtitle}>
          Choose how you want to unlock and enter your Firsthive Bank app.
        </Text>

        <View style={styles.options}>
          <TouchableOpacity style={styles.option} onPress={handleFaceID}>
            <Image source={faceIdImage} style={styles.icon} />
            <Text style={styles.optionText}>Face ID & Passcode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={handlePasscodeOnly}>
            <Image source={lockImage} style={styles.icon} />
            <Text style={styles.optionText}>Passcode only</Text>
          </TouchableOpacity>
        </View>

        {/* Checkmark display */}
        {faceIdConfirmed && (
          <View style={styles.checkmarkContainer}>
            <Image source={require('@/assets/images/tick.png')} style={styles.checkmarkIcon} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 32,
  },
  options: {
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  optionText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  icon: {
    width: 32, 
    height: 32, 
  },
  checkmarkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  checkmarkText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  checkmarkIcon: {
    width: 200,
    height: 200,
  },
});