import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

const CompetenciasSlider = ({ navigateToCompetition }) => {
  const competencias = [
    { id: 1, name: 'Copa Fútbol', icon: '⚽' },
    { id: 2, name: 'Open Pádel', icon: '🏓' },
    { id: 3, name: 'Masters Tenis', icon: '🎾' },
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
        Competencias
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {competencias.map((comp) => (
          <TouchableOpacity
            key={comp.id}
            style={{
              width: 140,
              backgroundColor: colors.surface,
              borderRadius: 12,
              padding: 15,
              marginRight: 15,
              alignItems: 'center',
            }}
            onPress={() => navigateToCompetition && navigateToCompetition(comp)}
          >
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
              <Text style={{ fontSize: 20 }}>{comp.icon}</Text>
            </View>
            <Text style={{
              fontFamily: 'DAZNOscine-Bold',
              color: colors.text,
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}>
              {comp.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CompetenciasSlider;
