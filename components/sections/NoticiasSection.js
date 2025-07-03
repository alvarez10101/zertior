// components/sections/NoticiasSection.js - IMÁGENES RESPONSIVAS PARA CUALQUIER TAMAÑO
import { useState } from 'react';
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/styles';

const { width: screenWidth } = Dimensions.get('window');

// ✅ Mapeo de categorías con colores consistentes con tu app
const categoryConfig = {
  'Fútbol': {
    icon: '⚽',
    color: 'rgba(255,255,255,0.9)', // Blanco suave para badges
    bgColor: 'rgba(255,255,255,0.1)' // Fondo gris suave
  },
  'Copa': {
    icon: '🏆',
    color: 'rgba(255,255,255,0.9)',
    bgColor: 'rgba(255,255,255,0.1)'
  },
  'Regional': {
    icon: '📍',
    color: 'rgba(255,255,255,0.9)',
    bgColor: 'rgba(255,255,255,0.1)'
  },
  'Padel': {
    icon: '🎾',
    color: 'rgba(255,255,255,0.9)',
    bgColor: 'rgba(255,255,255,0.1)'
  },
  'Masters': {
    icon: '🏆',
    color: 'rgba(255,255,255,0.9)',
    bgColor: 'rgba(255,255,255,0.1)'
  }
};

// ✅ Datos de ejemplo con URLs de imágenes
const noticiasExample = [
  {
    id: 1,
    title: 'Campeonato Juvenil 2025',
    subtitle: 'Inician las inscripciones para la nueva temporada',
    time: '2h',
    category: 'Fútbol',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop' // Imagen de fútbol
  },
  {
    id: 2,
    title: 'Final de la Copa Metropolitana',
    subtitle: 'Los mejores equipos se enfrentan este fin de semana',
    time: '5h',
    category: 'Copa',
    imageUrl: 'https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=400&h=300&fit=crop' // Imagen de trofeo
  },
  {
    id: 3,
    title: 'Nuevos equipos en Valparaíso',
    subtitle: 'Se suman 4 nuevos clubes a la región',
    time: '1d',
    category: 'Regional',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' // Imagen de estadio
  }
];

const NoticiasSection = ({ noticias = noticiasExample, onNoticiaPress }) => {
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [imageErrorStates, setImageErrorStates] = useState({});

  // ✅ Tamaño responsivo basado en pantalla con límites
  const getImageSize = () => {
    const baseSize = screenWidth * 0.18; // 18% del ancho de pantalla
    return Math.max(70, Math.min(baseSize, 100)); // Mínimo 70px, máximo 100px
  };

  const imageSize = getImageSize();

  const handleImageLoadStart = (noticiaId) => {
    setImageLoadingStates(prev => ({ ...prev, [noticiaId]: true }));
  };

  const handleImageLoadEnd = (noticiaId) => {
    setImageLoadingStates(prev => ({ ...prev, [noticiaId]: false }));
  };

  const handleImageError = (noticiaId) => {
    setImageErrorStates(prev => ({ ...prev, [noticiaId]: true }));
    setImageLoadingStates(prev => ({ ...prev, [noticiaId]: false }));
  };

  const handleNoticiaPress = (noticia) => {
    if (onNoticiaPress) {
      onNoticiaPress(noticia);
    } else {
      console.log(`Noticia ${noticia.id} pressed:`, noticia.title);
    }
  };

  const getCategoryConfig = (category) => {
    return categoryConfig[category] || {
      icon: '📰',
      color: 'rgba(255,255,255,0.9)',
      bgColor: 'rgba(255,255,255,0.1)'
    };
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Noticias</Text>

      {noticias.map((noticia, index) => {
        const config = getCategoryConfig(noticia.category);

        return (
          <TouchableOpacity
            key={noticia.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.08)', // Consistente con tus cards
              borderRadius: 16,
              marginBottom: index === noticias.length - 1 ? 0 : 16,
              padding: 16,
              elevation: 0, // ✅ Sin elevation en Android
              shadowColor: 'transparent', // ✅ Sin shadow en iOS
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0,
              shadowRadius: 0,
            }}
            onPress={() => handleNoticiaPress(noticia)}
          >
            {/* Imagen o Icono - Responsive */}
            <View style={{
              width: imageSize,
              height: imageSize,
              borderRadius: Math.max(8, imageSize * 0.15), // Border radius proporcional
              backgroundColor: config.bgColor,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: Math.max(12, imageSize * 0.15), // Margin proporcional
              overflow: 'hidden',
            }}>
              {noticia.imageUrl && !imageErrorStates[noticia.id] ? (
                <>
                  <Image
                    source={{ uri: noticia.imageUrl }}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover', // ✅ Cubre todo el espacio, recorta si es necesario
                    }}
                    onLoadStart={() => handleImageLoadStart(noticia.id)}
                    onLoadEnd={() => handleImageLoadEnd(noticia.id)}
                    onError={() => handleImageError(noticia.id)}
                  />
                  {/* Loading indicator */}
                  {imageLoadingStates[noticia.id] && (
                    <View style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <ActivityIndicator
                        size="small"
                        color="#FFFFFF"
                      />
                    </View>
                  )}
                  {/* Overlay gradiente para mejor legibilidad del badge */}
                  <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: imageSize * 0.4, // Altura proporcional al tamaño de imagen
                    backgroundColor: 'rgba(0,0,0,0.4)',
                  }} />
                </>
              ) : (
                // Fallback a icono si no hay imagen o falló la carga
                <Text style={{
                  fontSize: Math.max(24, imageSize * 0.4), // Tamaño de icono proporcional
                }}>
                  {config.icon}
                </Text>
              )}

              {/* Badge de categoría */}
              <View style={{
                position: 'absolute',
                bottom: Math.max(2, imageSize * 0.05),
                left: Math.max(2, imageSize * 0.05),
                right: Math.max(2, imageSize * 0.05),
                backgroundColor: noticia.imageUrl && !imageErrorStates[noticia.id]
                  ? 'rgba(0,0,0,0.8)' // Fondo más oscuro sobre imágenes
                  : 'rgba(255,255,255,0.2)', // Fondo claro sobre iconos
                paddingHorizontal: Math.max(4, imageSize * 0.08),
                paddingVertical: Math.max(2, imageSize * 0.04),
                borderRadius: Math.max(4, imageSize * 0.08),
              }}>
                <Text style={{
                  color: '#FFFFFF',
                  fontSize: Math.max(8, imageSize * 0.11), // Font size proporcional
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                  {noticia.category}
                </Text>
              </View>
            </View>

            {/* Contenido de la noticia */}
            <View style={{
              flex: 1,
              justifyContent: 'center',
            }}>
              <Text style={[
                styles.noticiaTitle,
                {
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 22,
                  marginBottom: 6,
                  color: '#FFFFFF', // Blanco consistente
                }
              ]}>
                {noticia.title}
              </Text>

              <Text style={{
                color: 'rgba(255,255,255,0.7)', // Gris claro consistente
                fontSize: 13,
                lineHeight: 18,
                marginBottom: 8,
              }}>
                {noticia.subtitle}
              </Text>

              {/* Tiempo y indicador de lectura */}
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <Text style={{
                  color: 'rgba(255,255,255,0.6)', // Gris más suave
                  fontSize: 12,
                  opacity: 0.8,
                }}>
                  {noticia.time}
                </Text>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <View style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: '#FFD700', // Dorado consistente
                    marginRight: 6,
                  }} />
                  <Text style={{
                    color: '#FFD700', // Dorado consistente
                    fontSize: 11,
                    fontWeight: '500',
                  }}>
                    Leer más
                  </Text>
                </View>
              </View>
            </View>

            {/* Flecha indicadora */}
            <View style={{
              paddingLeft: 12,
              justifyContent: 'center',
            }}>
              <Text style={{
                color: '#FFD700', // Dorado consistente
                fontSize: 20,
                opacity: 0.6,
              }}>
                ›
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NoticiasSection;