// components/common/SideMenu.js
import React, { useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';
import MenuFooter from './MenuFooter';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';

const SideMenu = () => {
  const menuAnimation = useRef(new Animated.Value(300)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const openMenu = () => {
    // Hacer visible el menú
    if (menuRef.current) {
      menuRef.current.setNativeProps({ pointerEvents: 'auto' });
    }
    if (overlayRef.current) {
      overlayRef.current.setNativeProps({ pointerEvents: 'auto' });
    }

    // Animar entrada
    Animated.parallel([
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  };

  const closeMenu = () => {
    // Animar salida
    Animated.parallel([
      Animated.timing(menuAnimation, {
        toValue: 300,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Ocultar menú después de la animación
      if (menuRef.current) {
        menuRef.current.setNativeProps({ pointerEvents: 'none' });
      }
      if (overlayRef.current) {
        overlayRef.current.setNativeProps({ pointerEvents: 'none' });
      }
    });
  };

  // Exponer función globalmente para acceso desde otros componentes
  React.useImperativeHandle(React.createRef(), () => ({
    openMenu
  }));

  // Almacenar referencia global
  global.openSideMenu = openMenu;

  return (
    <>
      {/* Overlay de fondo */}
      <Animated.View
        ref={overlayRef}
        style={[
          styles.menuOverlay,
          { opacity: overlayOpacity }
        ]}
        pointerEvents="none"
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={closeMenu}
        />
      </Animated.View>

      {/* Menú lateral */}
      <Animated.View
        ref={menuRef}
        style={[
          styles.sideMenu,
          { transform: [{ translateX: menuAnimation }] }
        ]}
        pointerEvents="none"
      >
        {/* Header del menú */}
        <MenuHeader closeMenu={closeMenu} />

        {/* Items del menú */}
        <MenuItems closeMenu={closeMenu} />

        {/* Footer del menú */}
        <MenuFooter />
      </Animated.View>
    </>
  );
};

export default SideMenu;