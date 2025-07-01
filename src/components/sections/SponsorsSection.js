import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { colors } from '../../constants/colors';

const SponsorsSection = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1' },
    { id: 2, name: 'Sponsor 2' },
    { id: 3, name: 'Sponsor 3' },
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
        Sponsors
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sponsors.map((sponsor) => (
          <View 
            key={sponsor.id} 
            style={{
              width: 120,
              height: 60,
              backgroundColor: colors.surface,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
            }}
          >
            <Text style={{
              fontFamily: 'DAZNOscine-Bold',
              color: colors.text,
              fontSize: 12,
            }}>
              {sponsor.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SponsorsSection;
