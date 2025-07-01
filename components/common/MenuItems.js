// components/common/MenuItems.js
import { ScrollView } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';
import MenuItem from './MenuItem';

const MenuItems = ({ closeMenu, onNavigate }) => {
  // Configuración de items del menú
  const menuItems = [
    {
      id: 'live',
      title: 'Partidos EN VIVO',
      subtitle: '3 partidos activos',
      icon: 'play-circle',
      backgroundColor: colors.live,
      onPress: () => {
        console.log('Navegando a partidos en vivo');
        if (onNavigate) onNavigate('live');
        closeMenu();
      }
    },
    {
      id: 'favorites',
      title: 'Mis Favoritos',
      subtitle: 'Equipos seguidos',
      icon: 'heart',
      backgroundColor: colors.primaryLight,
      onPress: () => {
        console.log('Navegando a favoritos');
        if (onNavigate) onNavigate('favorites');
        closeMenu();
      }
    },
    {
      id: 'notifications',
      title: 'Notificaciones',
      subtitle: '5 nuevas',
      icon: 'bell',
      backgroundColor: colors.accent,
      onPress: () => {
        console.log('Navegando a notificaciones');
        if (onNavigate) onNavigate('notifications');
        closeMenu();
      }
    },
    {
      id: 'settings',
      title: 'Configuración',
      subtitle: 'Ajustes de la app',
      icon: 'settings',
      backgroundColor: colors.success,
      onPress: () => {
        console.log('Navegando a configuración');
        if (onNavigate) onNavigate('settings');
        closeMenu();
      }
    },
    {
      id: 'help',
      title: 'Ayuda',
      subtitle: 'Soporte técnico',
      icon: 'help-circle',
      backgroundColor: colors.primary,
      onPress: () => {
        console.log('Navegando a ayuda');
        if (onNavigate) onNavigate('help');
        closeMenu();
      }
    },
    {
      id: 'about',
      title: 'Acerca de',
      subtitle: 'Versión 1.0.0',
      icon: 'info',
      backgroundColor: colors.warning,
      onPress: () => {
        console.log('Navegando a acerca de');
        if (onNavigate) onNavigate('about');
        closeMenu();
      }
    }
  ];

  return (
    <ScrollView
      style={styles.menuContent}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          backgroundColor={item.backgroundColor}
          onPress={item.onPress}
        />
      ))}
    </ScrollView>
  );
};

export default MenuItems;