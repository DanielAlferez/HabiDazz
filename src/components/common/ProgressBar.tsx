import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage } : ProgressBarProps) => {
  let indicatorColor = '#ff2600'; // Color por defecto

  if (percentage >= 80) {
    indicatorColor = '#32CD32'; // Verde para 80-100%
  } else if (percentage >= 60) {
    indicatorColor = '#FFD700'; // Dorado para 60-79%
  } else if (percentage >= 40) {
    indicatorColor = '#FFA500'; // Naranja para 40-59%
  } else if (percentage >= 20) {
    indicatorColor = '#FF6347'; // Rojo para 20-39%
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressIndicator, { width: `${percentage}%`, backgroundColor: indicatorColor }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5
  },
  progressBar: {
    width: 20,
    height: 5,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progressIndicator: {
    height: '100%',
    borderRadius: 15,
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BFFF',
    marginTop: 10,
  },
});

export default ProgressBar;
