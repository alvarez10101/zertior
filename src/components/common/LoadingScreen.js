import React from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accent} />
        <Text style={styles.loadingText}>Cargando Zertior...</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
