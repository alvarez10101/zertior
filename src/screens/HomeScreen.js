import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { colors } from '../constants/colors';
import MainSlider from '../components/sliders/MainSlider';
import CompetenciasSlider from '../components/sliders/CompetenciasSlider';
import RegionesSlider from '../components/sliders/RegionesSlider';
import NoticiasSection from '../components/sections/NoticiasSection';
import SponsorsSection from '../components/sections/SponsorsSection';

const HomeScreen = ({ 
  scrollY, 
  scrollRef, 
  navigateToCompetition,
  setSelectedRegion,
  setCurrentScreen 
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header simplificado integrado */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 50,
        backgroundColor: colors.primary,
      }}>
        <Text style={{
          fontFamily: 'DAZNOscine-Bold',
          fontSize: 24,
          fontWeight: 'bold',
          color: colors.text,
        }}>
          🏆 Zertior
        </Text>
        <TouchableOpacity style={{
          backgroundColor: colors.live,
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 15,
        }}>
          <Text style={{
            fontFamily: 'DAZNOscine-Bold',
            color: colors.text,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
            MENÚ
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenido scrolleable */}
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <MainSlider />
        <CompetenciasSlider navigateToCompetition={navigateToCompetition} />
        <RegionesSlider 
          setSelectedRegion={setSelectedRegion}
          setCurrentScreen={setCurrentScreen}
        />
        <NoticiasSection />
        <SponsorsSection />
        
        {/* Footer con info */}
        <View style={{ 
          padding: 30, 
          alignItems: 'center',
          backgroundColor: colors.surface,
          margin: 20,
          borderRadius: 12,
        }}>
          <Text style={{
            fontFamily: 'DAZNOscine-Bold',
            fontSize: 16,
            color: colors.success,
            marginBottom: 5,
          }}>
            ✅ Zertior funcionando correctamente
          </Text>
          <Text style={{
            fontFamily: 'DAZNOscine-Bold',
            fontSize: 14,
            color: colors.textMuted,
            textAlign: 'center',
          }}>
            Navegación modular implementada{'\n'}Toca las tarjetas para interactuar
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
