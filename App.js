// App.js - CON SIDEMENU CORREGIDO
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Pantallas
import CompetitionScreen from './screens/CompetitionScreen';
import HomeScreen from './screens/HomeScreen';
import RegionScreen from './screens/RegionScreen';
import SubcategoryScreen from './screens/SubcategoryScreen';

// Componentes comunes
import LoadingScreen from './components/common/LoadingScreen';
import SideMenu from './components/common/SideMenu';

// Constantes y estilos
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

  // ✅ NUEVO: Estado del menú lateral
  const [menuVisible, setMenuVisible] = useState(false);

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
  // FUNCIONES DEL MENÚ LATERAL
  // ========================================

  // ✅ NUEVO: Funciones para controlar el menú
  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Manejo de navegación desde el menú
  const handleMenuNavigation = (menuItem) => {
    console.log(`Navegando a: ${menuItem}`);

    // ✅ Cerrar menú al navegar
    closeMenu();

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
    closeMenu(); // ✅ Cerrar menú
    // Aquí puedes agregar la lógica de logout
    navigateToHome();
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
  // RENDERIZADO DE PANTALLAS
  // ========================================
  const renderCurrentScreen = () => {
    const commonProps = {
      navigateBack,
      navigateToHome,
      selectedTab,
      setSelectedTab,
      onMenuPress: openMenu, // ✅ NUEVO: Pasar función para abrir menú
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
            onMenuPress={openMenu} // ✅ NUEVO: Pasar función para abrir menú
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
            onMenuPress={openMenu} // ✅ NUEVO: Pasar función para abrir menú
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
    <SafeAreaProvider>
      {/* StatusBar corregido para Android */}
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent={true}
      />

      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {/* Contenido principal - Pantalla activa */}
        {renderCurrentScreen()}

        {/* ✅ CORREGIDO: Menú lateral con props necesarias */}
        <SideMenu
          isVisible={menuVisible}
          onClose={closeMenu}
          onNavigate={handleMenuNavigation}
          onLogout={handleLogout}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}