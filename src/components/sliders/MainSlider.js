import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

const MainSlider = () => {
  return (
    <View style={{ height: 300, backgroundColor: colors.primary }}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={{ width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a2e' }}>
          <Text style={{ color: 'white', fontSize: 24, fontFamily: 'DAZNOscine-Bold' }}>
            🎬 Final Copa Santiago
          </Text>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: colors.accent, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 16 }}>▶</Text>
          </View>
        </View>
        <View style={{ width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#16213e' }}>
          <Text style={{ color: 'white', fontSize: 24, fontFamily: 'DAZNOscine-Bold' }}>
            ✨ Mejores jugadas
          </Text>
        </View>
        <View style={{ width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f3460' }}>
          <Text style={{ color: 'white', fontSize: 24, fontFamily: 'DAZNOscine-Bold' }}>
            📊 Resumen Fecha 10
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainSlider;
