import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const progress = (step / totalSteps) * 100;
  
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: '#E2E2E2',
    width: '100%',
  },
  fill: {
    height: '100%',
    backgroundColor: '#FF6B00',
  },
});

