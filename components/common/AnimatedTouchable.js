// components/common/AnimatedTouchable.js
import { useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

const AnimatedTouchable = ({
    children,
    onPress,
    style,
    scaleValue = 0.95,
    duration = 100,
    disabled = false,
    ...props
}) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        if (disabled) return;

        Animated.timing(scaleAnim, {
            toValue: scaleValue,
            duration: duration,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        if (disabled) return;

        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
        }).start();
    };

    const handlePress = () => {
        if (disabled || !onPress) return;

        // Micro-vibración en el feedback
        // HapticFeedback.impact(HapticFeedback.ImpactFeedbackStyle.Light);

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
                    style,
                    {
                        transform: [{ scale: scaleAnim }],
                        opacity: disabled ? 0.6 : 1,
                    },
                ]}
            >
                {children}
            </Animated.View>
        </TouchableOpacity>
    );
};

export default AnimatedTouchable;