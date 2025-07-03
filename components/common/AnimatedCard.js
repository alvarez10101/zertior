// components/common/AnimatedCard.js - Versión simple
import { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

const AnimatedCard = ({
    children,
    onPress,
    style,
    delay = 0,
    animateOnMount = true,
    disabled = false,
    ...props
}) => {
    // ✅ Solo animaciones compatibles con useNativeDriver: true
    const fadeAnim = useRef(new Animated.Value(animateOnMount ? 0 : 1)).current;
    const translateYAnim = useRef(new Animated.Value(animateOnMount ? 30 : 0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (animateOnMount) {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 600,
                    delay: delay,
                    useNativeDriver: true,
                }),
                Animated.timing(translateYAnim, {
                    toValue: 0,
                    duration: 600,
                    delay: delay,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, []);

    const handlePressIn = () => {
        if (disabled) return;

        Animated.timing(scaleAnim, {
            toValue: 0.98,
            duration: 150,
            useNativeDriver: true, // ✅ Scale SÍ es compatible
        }).start();
    };

    const handlePressOut = () => {
        if (disabled) return;

        Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 300,
            friction: 10,
            useNativeDriver: true, // ✅ Scale SÍ es compatible
        }).start();
    };

    const handlePress = () => {
        if (disabled || !onPress) return;
        onPress();
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            disabled={disabled}
            {...props}
        >
            <Animated.View
                style={[
                    {
                        opacity: fadeAnim,
                        transform: [
                            { translateY: translateYAnim },
                            { scale: scaleAnim }
                        ],
                    },
                    // ✅ Sombras estáticas (sin animar)
                    {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.15,
                        shadowRadius: 8,
                        elevation: 5,
                    },
                    style,
                ]}
            >
                {children}
            </Animated.View>
        </TouchableOpacity>
    );
};

export default AnimatedCard;