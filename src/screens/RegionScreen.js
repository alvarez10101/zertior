import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const RegionScreen = ({ selectedItem, navigateToHome }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToHome} style={{ marginBottom: 10 }}>
          <Text style={{ color: '#FFD700', fontSize: 18 }}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.mainTitle}>
          🌍 {selectedItem?.name || 'Región'}
        </Text>
        <Text style={styles.subtitle}>{selectedItem?.teams} equipos registrados</Text>
      </View>
      
      <View style={styles.section}>
        <View style={styles.regionCard}>
          <View style={styles.regionInfo}>
            <Text style={styles.regionName}>Liga Premier Local</Text>
            <Text style={styles.regionTeams}>8 equipos</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.regionCard}>
          <View style={styles.regionInfo}>
            <Text style={styles.regionName}>Copa Regional</Text>
            <Text style={styles.regionTeams}>16 equipos</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegionScreen;
