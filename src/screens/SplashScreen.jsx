import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Animated, StyleSheet } from 'react-native';
const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const logo1 = require('@/assets/images/splash-logo.png');
  const logo2 = require('@/assets/images/Qosynelogo.png'); 
  const [showFirstLogo, setShowFirstLogo] = useState(true);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setShowFirstLogo(false);
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        const navigateTimer = setTimeout(() => {
          navigation.navigate('EmailSignup');
        }, 3000);

        return () => clearTimeout(navigateTimer);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      {showFirstLogo ? (
        <Animated.Image
          source={logo1}
          style={[styles.logo, { opacity: fadeAnim }]}
          resizeMode="contain"
        />
      ) : (
        <Animated.Image
          source={logo2}
          style={[styles.logo, { opacity: fadeAnim }]}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;