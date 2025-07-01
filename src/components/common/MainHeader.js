import React from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const MainHeader = ({ scrollY }) => {
  // ✅ Valor por defecto si scrollY no está definido
  const defaultScrollY = new Animated.Value(0);
  const animatedValue = scrollY || defaultScrollY;

  const headerBackground = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [`rgba(26,54,93,1)`, `rgba(26,54,93,0.5)`],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View 
      style={[
        styles.mainHeader, 
        { 
          backgroundColor: headerBackground, 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 100 
        }
      ]}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>🏆 Zertior</Text>
      </View>
      <TouchableOpacity style={styles.liveIndicator}>
        <Text style={styles.liveText}>MENÚ</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MainHeader;
