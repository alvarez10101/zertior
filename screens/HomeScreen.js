// screens/HomeScreen.js - DEBUG SIMPLE
import { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, RefreshControl, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainHeader from '../components/common/MainHeader';
import SideMenu from '../components/common/SideMenu'; // ✅ Importar directo aquí
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
  onMenuPress // Esta prop viene del App.js
}) => {
  const [appLoading, setAppLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // ✅ ESTADO LOCAL DEL MENÚ PARA PRUEBA
  const [localMenuVisible, setLocalMenuVisible] = useState(false);

  const insets = useSafeAreaInsets();

  // ✅ FUNCIONES LOCALES PARA DEBUG
  const testOpenMenu = () => {
    //console.log('🔥 TEST: Abriendo menú local');
    //Alert.alert('DEBUG', 'Función testOpenMenu ejecutada');
    setLocalMenuVisible(true);
  };

  const testCloseMenu = () => {
    console.log('🔥 TEST: Cerrando menú local');
    setLocalMenuVisible(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setRefreshing(false);
    }
  };

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

  // ✅ DEBUG: Verificar props
  useEffect(() => {
    console.log('🏠 HomeScreen props:', {
      onMenuPress: !!onMenuPress,
      typeof_onMenuPress: typeof onMenuPress
    });
  }, [onMenuPress]);

  if (appLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#1A1F2E' }}>
        {/* ✅ BOTÓN DE PRUEBA EN LOADING */}


        <MainHeader scrollY={scrollY} onMenuPress={testOpenMenu} />

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
      {/* ✅ BOTÓN DE PRUEBA VISIBLE */}


      <MainHeader scrollY={scrollY} onMenuPress={testOpenMenu} />


      {/* Indicador custom unificado */}
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

      {/* Overlay de skeletons durante refresh */}
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

      {/* ✅ MENÚ LOCAL PARA PRUEBA */}
      <SideMenu
        isVisible={localMenuVisible}
        onClose={testCloseMenu}
        onNavigate={(item) => {
          console.log('Navegando a:', item);
          testCloseMenu();
        }}
        onLogout={() => {
          console.log('Logout');
          testCloseMenu();
        }}
      />
    </View>
  );
};

export default HomeScreen;