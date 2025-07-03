// components/common/PageTransition.js
import { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const PageTransition = ({
    children,
    animationType = 'slideRight',
    duration = 300,
    delay = 0
}) => {
    const animValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animValue, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
        }).start();
    }, []);

    const getTransform = () => {
        switch (animationType) {
            case 'slideRight':
                return [{
                    translateX: animValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [width, 0],
                    }),
                }];
            case 'slideLeft':
                return [{
                    translateX: animValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-width, 0],
                    }),
                }];
            case 'slideUp':
                return [{
                    translateY: animValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [height, 0],
                    }),
                }];
            case 'fadeIn':
                return [];
            case 'scale':
                return [{
                    scale: animValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                    }),
                }];
            default:
                return [];
        }
    };

    return (
        <Animated.View
            style={{
                flex: 1,
                opacity: animationType === 'fadeIn' ? animValue : 1,
                transform: getTransform(),
            }}
        >
            {children}
        </Animated.View>
    );
};

export default PageTransition;