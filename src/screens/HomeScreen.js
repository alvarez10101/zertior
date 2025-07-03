// screens/HomeScreen.js - VERSIÓN FINAL UNIFICADA
import { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, RefreshControl, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainHeader from '../components/common/MainHeader';
import {
  CompetenciasSkeleton,
  NoticiasSkeleton,
  RegionesSkeleton,
  SliderSkeleton
} from '../components/common/SkeletonLoader';
import NoticiasSection from '../components/sections/NoticiasSection';
import SponsorsSection from '../components/sections/SponsorsSection';
import CompetenciasSlider from '../components/sliders/CompetenciasSlider';
import MainSlider from '../components/sliders/MainSlider';
import RegionesSlider from '../components/sliders/RegionesSlider';

const HomeScreen = ({
  scrollY,
  scrollRef,
  navigateToCompetition,
  setSelectedRegion,
  setCurrentScreen,
  onMenuPress // ✅ NUEVA PROP
}) => {
  const [appLoading, setAppLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setRefreshing(false);
    }
  };

  // ✅ RefreshControl unificado - ocultar spinners nativos en ambas plataformas
  const refreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={handleRefresh}
      tintColor="transparent"
      colors={['transparent']}
      progressBackgroundColor="transparent"
    />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#1A1F2E' }}>
        <MainHeader scrollY={scrollY} onMenuPress={onMenuPress} />
        <Animated.ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingTop: 60,
            paddingBottom: insets.bottom + 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          <SliderSkeleton />
          <CompetenciasSkeleton />
          <RegionesSkeleton />
          <NoticiasSkeleton />
        </Animated.ScrollView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MainHeader scrollY={scrollY} onMenuPress={onMenuPress} />

      {/* ✅ INDICADOR CUSTOM UNIFICADO PARA AMBAS PLATAFORMAS */}
      {refreshing && (
        <View style={{
          position: 'absolute',
          top: insets.top + 70,
          left: 0,
          right: 0,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1001,
        }}>
          <View style={{
            backgroundColor: 'rgba(26, 31, 46, 0.9)',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <ActivityIndicator
              size="small"
              color="#FFD700"
              style={{ marginRight: 10 }}
            />
            <Text style={{
              color: '#FFD700',
              fontSize: 14,
              fontWeight: '500',
            }}>
              Actualizando...
            </Text>
          </View>
        </View>
      )}

      <Animated.ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: 60,
          paddingBottom: insets.bottom + 40,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        refreshControl={refreshControl}
      >
        <MainSlider />
        <CompetenciasSlider navigateToCompetition={navigateToCompetition} />
        <RegionesSlider
          setSelectedRegion={setSelectedRegion}
          setCurrentScreen={setCurrentScreen}
        />
        <NoticiasSection />
        <SponsorsSection />
      </Animated.ScrollView>

      {/* ✅ OVERLAY DE SKELETONS DURANTE REFRESH */}
      {refreshing && (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(26, 31, 46, 0.95)',
          zIndex: 1000,
        }}>
          <View style={{ height: 60 + insets.top }} />
          <View style={{ flex: 1 }}>
            <SliderSkeleton />
            <CompetenciasSkeleton />
            <RegionesSkeleton />
            <NoticiasSkeleton />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;