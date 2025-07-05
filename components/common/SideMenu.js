// components/common/SideMenu.js - CON ICONOS VECTORIALES MONOCROMÁTICOS
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';

const SideMenu = ({ isVisible, onClose, onNavigate, onLogout }) => {
  const insets = useSafeAreaInsets();

  // ✅ Configuración de menú con ICONOS VECTORIALES MONOCROMÁTICOS
  const menuSections = [
    {
      title: "Principal",
      items: [
        {
          id: 'live',
          title: 'Partidos EN VIVO',
          subtitle: '3 partidos activos',
          icon: 'circle',
          color: colors.live, // ✅ Rojo de tu paleta
          badge: '3',
          onPress: () => onNavigate('live')
        },
        {
          id: 'favorites',
          title: 'Mis Favoritos',
          subtitle: 'Equipos seguidos',
          icon: 'star-outline',
          color: colors.accent, // ✅ Dorado de tu paleta
          onPress: () => onNavigate('favorites')
        }
      ]
    },
    {
      title: "Configuración",
      items: [
        {
          id: 'notifications',
          title: 'Notificaciones',
          subtitle: '5 nuevas',
          icon: 'bell-outline',
          color: colors.accent, // ✅ Dorado de tu paleta
          badge: '5',
          onPress: () => onNavigate('notifications')
        },
        {
          id: 'settings',
          title: 'Configuración',
          subtitle: 'Ajustes de la app',
          icon: 'cog-outline',
          color: colors.textMuted, // ✅ Gris de tu paleta
          onPress: () => onNavigate('settings')
        }
      ]
    },
    {
      title: "Soporte",
      items: [
        {
          id: 'help',
          title: 'Ayuda',
          subtitle: 'Soporte técnico',
          icon: 'help-circle-outline',
          color: colors.textMuted, // ✅ Gris de tu paleta
          onPress: () => onNavigate('help')
        },
        {
          id: 'about',
          title: 'Acerca de',
          subtitle: 'Versión 1.0.0',
          icon: 'information-outline',
          color: colors.textMuted, // ✅ Gris de tu paleta
          onPress: () => onNavigate('about')
        }
      ]
    }
  ];

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      console.log('Logout pressed');
    }
  };

  if (!isVisible) return null;

  return (
    <View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    }}>
      {/* Overlay */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onPress={onClose}
        activeOpacity={1}
      />

      {/* Menu Panel */}
      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '85%',
        maxWidth: 320,
        backgroundColor: colors.background,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 20,
      }}>
        <ScrollView style={{ flex: 1 }}>
          {/* Header con usuario */}
          <View style={{
            paddingTop: insets.top + 20,
            paddingHorizontal: 20,
            paddingBottom: 30,
            backgroundColor: colors.surface,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          }}>
            {/* Botón cerrar */}
            <TouchableOpacity
              onPress={onClose}
              style={{
                position: 'absolute',
                top: insets.top + 15,
                right: 15,
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255,0.1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MaterialCommunityIcons name="close" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Avatar y datos del usuario */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.accent,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
              }}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{
                  color: colors.text,
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 4,
                }}>
                  Usuario
                </Text>
                <Text style={{
                  color: colors.textSecondary,
                  fontSize: 14,
                }}>
                  user@liga.cl
                </Text>
              </View>
            </View>
          </View>

          {/* Secciones del menú */}
          <View style={{ paddingVertical: 20 }}>
            {menuSections.map((section, sectionIndex) => (
              <View key={section.title} style={{ marginBottom: 30 }}>
                {/* Título de sección */}
                <Text style={{
                  color: colors.textMuted,
                  fontSize: 12,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  paddingHorizontal: 20,
                  marginBottom: 15,
                }}>
                  {section.title}
                </Text>

                {/* Items de la sección */}
                {section.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={item.onPress}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 20,
                      paddingVertical: 16,
                      borderRadius: 0,
                      marginHorizontal: 10,
                      backgroundColor: 'transparent',
                    }}
                    activeOpacity={0.7}
                  >
                    {/* Icono vectorial */}
                    <View style={{
                      width: 44,
                      height: 44,
                      borderRadius: 22,
                      backgroundColor: `${item.color}20`,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 16,
                    }}>
                      <MaterialCommunityIcons
                        name={item.icon}
                        size={20}
                        color="#FFFFFF"
                      />
                    </View>

                    {/* Contenido */}
                    <View style={{ flex: 1 }}>
                      <Text style={{
                        color: colors.text,
                        fontSize: 16,
                        fontWeight: '600',
                        marginBottom: 2,
                      }}>
                        {item.title}
                      </Text>
                      <Text style={{
                        color: colors.textSecondary,
                        fontSize: 13,
                      }}>
                        {item.subtitle}
                      </Text>
                    </View>

                    {/* Badge y flecha */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      {item.badge && (
                        <View style={{
                          backgroundColor: item.color,
                          paddingHorizontal: 8,
                          paddingVertical: 4,
                          borderRadius: 12,
                          marginRight: 12,
                        }}>
                          <Text style={{
                            color: colors.text,
                            fontSize: 12,
                            fontWeight: 'bold',
                          }}>
                            {item.badge}
                          </Text>
                        </View>
                      )}
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={16}
                        color="#FFFFFF"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Footer con logout */}
        <View style={{
          padding: 20,
          paddingBottom: insets.bottom + 20,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        }}>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 14,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: 'rgba(244, 67, 54, 0.3)',
              backgroundColor: 'rgba(244, 67, 54, 0.1)',
            }}
          >
            <MaterialCommunityIcons
              name="logout"
              size={18}
              color="#F44336"
              style={{ marginRight: 8 }}
            />
            <Text style={{
              color: '#F44336',
              fontSize: 16,
              fontWeight: '600',
            }}>
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SideMenu;