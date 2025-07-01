// App.js - Aplicación principal
import * as Font from 'expo-font';
import { useEffect, useRef, useState } from 'react';
import { Animated, SafeAreaView, StatusBar } from 'react-native';

// Pantallas
import CompetitionScreen from './screens/CompetitionScreen';
import HomeScreen from './screens/HomeScreen';
import RegionScreen from './screens/RegionScreen';
import SubcategoryScreen from './screens/SubcategoryScreen';

// Componentes comunes
import LoadingScreen from './components/common/LoadingScreen';
import SideMenu from './components/common/SideMenu';

// Constantes y estilos
import { colors } from './constants/colors';
import { styles } from './styles/styles';

export default function App() {
  // ========================================
  // ESTADOS PRINCIPALES
  // ========================================
  const [fontLoaded, setFontLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTab, setSelectedTab] = useState('fixture');

  // ========================================
  // REFERENCIAS ANIMADAS
  // ========================================
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);

  // ========================================
  // CARGA DE FUENTES
  // ========================================
  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'DAZNOscine-Bold': require('./assets/fonts/DAZNOscine-Bold.ttf'),
      });
      setFontLoaded(true);
    } catch (error) {
      console.error('Error loading font:', error);
      setFontLoaded(true);
    }
  };

  // ========================================
  // FUNCIONES DE NAVEGACIÓN
  // ========================================

  // Navegación a competencia
  const navigateToCompetition = (competition) => {
    setSelectedCompetition(competition);
    setCurrentScreen('competition');
  };

  // Navegación a subcategoría
  const navigateToSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setCurrentScreen('subcategory');
  };

  // Navegación al home (reset completo)
  const navigateToHome = () => {
    setCurrentScreen('home');
    setSelectedRegion(null);
    setSelectedCompetition(null);
    setSelectedSubcategory(null);
    setSelectedTab('fixture');
  };

  // Navegación hacia atrás (inteligente)
  const navigateBack = () => {
    switch (currentScreen) {
      case 'subcategory':
        setCurrentScreen('competition');
        setSelectedSubcategory(null);
        break;
      case 'competition':
        setCurrentScreen('home');
        setSelectedCompetition(null);
        break;
      case 'region':
        setCurrentScreen('home');
        setSelectedRegion(null);
        break;
      default:
        setCurrentScreen('home');
    }
  };

  // Navegación a región (desde HomeScreen)
  const navigateToRegion = (region) => {
    setSelectedRegion(region);
    setCurrentScreen('region');
  };

  // ========================================
  // FUNCIONES DEL MENÚ LATERAL
  // ========================================

  // Manejo de navegación desde el menú
  const handleMenuNavigation = (menuItem) => {
    console.log(`Navegando a: ${menuItem}`);

    switch (menuItem) {
      case 'live':
        // Navegar a partidos en vivo
        break;
      case 'favorites':
        // Navegar a favoritos
        break;
      case 'notifications':
        // Navegar a notificaciones
        break;
      case 'settings':
        // Navegar a configuración
        break;
      case 'help':
        // Navegar a ayuda
        break;
      case 'about':
        // Navegar a acerca de
        break;
      default:
        console.log('Item de menú no reconocido');
    }
  };

  // Manejo de logout
  const handleLogout = () => {
    console.log('Cerrando sesión...');
    // Aquí puedes agregar la lógica de logout
    // Por ejemplo: limpiar AsyncStorage, resetear estados, etc.
    navigateToHome();
  };

  // ========================================
  // RENDERIZADO DE PANTALLAS
  // ========================================
  const renderCurrentScreen = () => {
    const commonProps = {
      navigateBack,
      navigateToHome,
      selectedTab,
      setSelectedTab,
    };

    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            scrollY={scrollY}
            scrollRef={scrollRef}
            navigateToCompetition={navigateToCompetition}
            setSelectedRegion={navigateToRegion}
            setCurrentScreen={setCurrentScreen}
          />
        );

      case 'competition':
        return (
          <CompetitionScreen
            selectedCompetition={selectedCompetition}
            navigateToSubcategory={navigateToSubcategory}
            {...commonProps}
          />
        );

      case 'subcategory':
        return (
          <SubcategoryScreen
            selectedSubcategory={selectedSubcategory}
            selectedCompetition={selectedCompetition}
            {...commonProps}
          />
        );

      case 'region':
        return (
          <RegionScreen
            selectedRegion={selectedRegion}
            setCurrentScreen={setCurrentScreen}
            scrollY={scrollY}
            {...commonProps}
          />
        );

      default:
        return (
          <HomeScreen
            scrollY={scrollY}
            scrollRef={scrollRef}
            navigateToCompetition={navigateToCompetition}
            setSelectedRegion={navigateToRegion}
            setCurrentScreen={setCurrentScreen}
          />
        );
    }
  };

  // ========================================
  // RENDERIZADO PRINCIPAL
  // ========================================

  // Pantalla de carga mientras se cargan las fuentes
  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Contenido principal - Pantalla activa */}
      {renderCurrentScreen()}

      {/* Menú lateral - Siempre presente */}
      <SideMenu
        onNavigate={handleMenuNavigation}
        onLogout={handleLogout}
      />
    </SafeAreaView>
  );
}

// ========================================
// INFORMACIÓN DE LA APP
// ========================================

/*
ESTRUCTURA DE LA APLICACIÓN:

📱 App.js (Principal)
├── 🎬 HomeScreen
│   ├── MainHeader
│   ├── MainSlider
│   ├── CompetenciasSlider
│   ├── RegionesSlider
│   ├── NoticiasSection
│   └── SponsorsSection
├── ⚽ CompetitionScreen
│   ├── DynamicHeader
│   ├── CompetitionBanner
│   └── SubcategoriasList
├── 🎯 SubcategoryScreen
│   ├── DynamicHeader
│   ├── SubcategoryBanner
│   ├── TabNavigation
│   ├── TabContent
│   ├── DetailCard
│   └── ActionButtons
├── 🌍 RegionScreen
│   ├── RegionHeader
│   ├── RegionSlider
│   ├── LigasList
│   ├── TabNavigation
│   └── TabContent
└── 🎛️ SideMenu
    ├── MenuHeader
    ├── MenuItems
    └── MenuFooter

NAVEGACIÓN:
Home → Competition → Subcategory
Home → Region
Menu → Various sections

ESTADO GLOBAL:
- currentScreen: Pantalla activa
- selectedRegion: Región seleccionada
- selectedCompetition: Competencia seleccionada
- selectedSubcategory: Subcategoría seleccionada
- selectedTab: Pestaña activa en tabs
- fontLoaded: Estado de carga de fuentes

CARACTERÍSTICAS:
✅ Navegación fluida entre pantallas
✅ Menú lateral con animaciones
✅ Sistema de tabs reutilizable
✅ Componentes modulares
✅ Estilos centralizados
✅ Manejo de estado limpio
✅ Performance optimizada
*/