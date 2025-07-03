// components/sections/SponsorsSection.js - CON ANIMACIÓN SIMPLE
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { sponsors } from '../../data/mockData';
import { styles } from '../../styles/styles';

const { width: screenWidth } = Dimensions.get('window');

// ✅ Componente de animación simple inline
const SimpleSponsorCard = ({ sponsor, delay, onPress }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      delay,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, delay]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 12,
          marginHorizontal: 8,
          padding: 12,
          alignItems: 'center',
          justifyContent: 'center',
          width: 140,
          height: 80,
          // ✅ SIN estilos conflictivos
        }}
      >
        <Image
          source={sponsor.logo}
          style={{
            width: '90%',
            height: '70%',
            maxWidth: 120,
            maxHeight: 50,
            resizeMode: 'contain',
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const SponsorsSection = () => {
  const sponsorWidth = 140;
  const sponsorMargin = 16;
  const extraSpace = 800;
  const totalContentWidth = (sponsors.length * (sponsorWidth + sponsorMargin)) + extraSpace;
  const paddingHorizontal = 8;

  return (
    <View style={[styles.section, {
      marginBottom: Platform.OS === 'android' ? 60 : 30
    }]}>
      <Text style={styles.sectionTitle}>Nuestros Sponsors</Text>

      <View style={{
        width: screenWidth,
        height: 100,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: totalContentWidth,
            paddingHorizontal: paddingHorizontal,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          style={{ flex: 1 }}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          scrollEventThrottle={1}
          removeClippedSubviews={false}
        >
          {sponsors.map((sponsor, index) => (
            <SimpleSponsorCard
              key={sponsor.id}
              sponsor={sponsor}
              delay={index * 200}
              onPress={() => {
                console.log(`Sponsor ${sponsor.id} pressed`);
              }}
            />
          ))}

          <View style={{ width: 80, height: 80, backgroundColor: 'transparent' }} />
          <View style={{ width: 80, height: 80, backgroundColor: 'transparent' }} />
          <View style={{ width: 80, height: 80, backgroundColor: 'transparent' }} />
          <View style={{ width: 80, height: 80, backgroundColor: 'transparent' }} />
          <View style={{ width: 80, height: 80, backgroundColor: 'transparent' }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SponsorsSection;