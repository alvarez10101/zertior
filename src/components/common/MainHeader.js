// components/common/MainHeader.js - SUPER DEBUG
import { Alert, Animated, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainHeader = ({ scrollY, onMenuPress }) => {
  const insets = useSafeAreaInsets();

  // ✅ DEBUG: Verificar props al renderizar
  console.log('🏠 MainHeader renderizado con:', {
    onMenuPress: !!onMenuPress,
    typeof_onMenuPress: typeof onMenuPress
  });

  // ✅ Función súper simple para debug
  const handleMenuPress = () => {
    console.log('🔥🔥🔥 BOTÓN MENÚ PRESIONADO EN MAINHEADER');

    // Mostrar alert para confirmar que se ejecuta
    Alert.alert('DEBUG', 'Botón MENÚ presionado en MainHeader');

    // Intentar ejecutar onMenuPress
    if (onMenuPress && typeof onMenuPress === 'function') {
      console.log('✅ Ejecutando onMenuPress...');
      onMenuPress();
      console.log('✅ onMenuPress ejecutado exitosamente');
    } else {
      console.log('❌ onMenuPress no es válido:', {
        exists: !!onMenuPress,
        type: typeof onMenuPress,
        value: onMenuPress
      });
    }
  };

  return (
    <Animated.View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: '#1A1F2E',
      paddingTop: insets.top,
      paddingHorizontal: 20,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255,255,255,0.1)',
    }}>
      {/* Logo */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#FFFFFF',
        }}>
          zertior
        </Text>
      </View>

      {/* Indicador LIVE */}
      <View style={{
        backgroundColor: '#FF4444',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
      }}>
        <Text style={{
          color: '#FFFFFF',
          fontSize: 12,
          fontWeight: 'bold',
        }}>
          LIVE
        </Text>
      </View>

      {/* ✅ BOTÓN MENÚ - SUPER DEBUG */}
      <TouchableOpacity
        onPress={handleMenuPress}
        style={{
          backgroundColor: '#FF4757',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 20,
          minWidth: 60,
          alignItems: 'center',
          // ✅ Asegurar que sea tocable
          zIndex: 999,
        }}
        activeOpacity={0.6} // Cambio visual al tocar
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Área de toque más grande
      >
        <Text style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 12,
        }}>
          MENÚ
        </Text>
      </TouchableOpacity>

      {/* ✅ BOTÓN DE BACKUP PARA COMPARAR */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert('BACKUP', 'Botón backup funciona');
          console.log('🟢 Botón backup presionado');
        }}
        style={{
          backgroundColor: '#00FF00',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 10,
          marginLeft: 10,
        }}
        activeOpacity={0.6}
      >
        <Text style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 10,
        }}>
          OK
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MainHeader;