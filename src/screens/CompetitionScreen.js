import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const CompetitionScreen = ({ selectedItem, navigateToHome }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToHome} style={{ marginBottom: 10 }}>
          <Text style={{ color: '#FFD700', fontSize: 18 }}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.mainTitle}>
          {selectedItem?.icon} {selectedItem?.name || 'Competencia'}
        </Text>
        <Text style={styles.subtitle}>Subcategorías disponibles</Text>
      </View>
      
      <View style={styles.section}>
        <View style={styles.competitionCard}>
          <Text style={styles.competitionIcon}>⚽</Text>
          <Text style={styles.competitionName}>Fútbol Femenino</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.competitionCard}>
          <Text style={styles.competitionIcon}>👨‍💼</Text>
          <Text style={styles.competitionName}>Adultos</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.competitionCard}>
          <Text style={styles.competitionIcon}>🧒</Text>
          <Text style={styles.competitionName}>Junior</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompetitionScreen;
