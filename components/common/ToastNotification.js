// components/common/ToastNotification.js
import { Feather } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

const ToastNotification = ({ visible, message, type = 'info', duration = 3000, onHide }) => {
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#10B981', icon: 'check-circle' };
      case 'error':
        return { backgroundColor: '#EF4444', icon: 'x-circle' };
      case 'warning':
        return { backgroundColor: '#F59E0B', icon: 'alert-triangle' };
      default:
        return { backgroundColor: colors.primary, icon: 'info' };
    }
  };

  const toastStyle = getToastStyle();

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onHide) onHide();
    });
  };

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  if (!visible) return null;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 60,
        left: 16,
        right: 16,
        zIndex: 9999,
        transform: [{ translateY }],
        opacity,
      }}
    >
      <View
        style={{
          backgroundColor: toastStyle.backgroundColor,
          borderRadius: 12,
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <Feather name={toastStyle.icon} size={20} color="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 12,
            flex: 1,
          }}
        >
          {message}
        </Text>
      </View>
    </Animated.View>
  );
};

export const useToast = () => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'info',
  });

  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const ToastComponent = () => (
    <ToastNotification
      visible={toast.visible}
      message={toast.message}
      type={toast.type}
      onHide={hideToast}
    />
  );

  return {
    showToast,
    hideToast,
    ToastComponent,
    showSuccess: (message) => showToast(message, 'success'),
    showError: (message) => showToast(message, 'error'),
    showWarning: (message) => showToast(message, 'warning'),
    showInfo: (message) => showToast(message, 'info'),
  };
};

export default ToastNotification;