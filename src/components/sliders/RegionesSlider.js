import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

const RegionesSlider = ({ setSelectedRegion, setCurrentScreen }) => {
  const regiones = [
    { id: 1, name: 'Región Metropolitana', teams: 24 },
    { id: 2, name: 'Valparaíso', teams: 18 },
    { id: 3, name: 'Biobío', teams: 16 },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ 
        fontFamily: 'DAZNOscine-Bold', 
        fontSize: 20, 
        color: colors.text, 
        marginBottom: 15, 
        fontWeight: 'bold' 
      }}>
        Regiones
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {regiones.map((region) => (
          <TouchableOpacity
            key={region.id}
            style={{
              width: 140,
              backgroundColor: colors.surface,
              borderRadius: 12,
              padding: 15,
              marginRight: 15,
              alignItems: 'center',
            }}
            onPress={() => {
              setSelectedRegion && setSelectedRegion(region);
              setCurrentScreen && setCurrentScreen('region');
            }}
          >
            <Text style={{
              fontFamily: 'DAZNOscine-Bold',
              color: colors.text,
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: 5,
            }}>
              {region.name}
            </Text>
            <Text style={{
              fontFamily: 'DAZNOscine-Bold',
              color: colors.textMuted,
              fontSize: 12,
            }}>
              {region.teams} equipos
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RegionesSlider;
