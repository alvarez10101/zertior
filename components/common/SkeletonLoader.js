// components/common/SkeletonLoader.js
import * as React from 'react';
import { Animated, View } from 'react-native';

// Componente base para skeletons
const SkeletonItem = ({
    width = '100%',
    height = 20,
    style = {},
    backgroundColor = 'rgba(255,255,255,0.1)'
}) => {
    const opacity = React.useRef(new Animated.Value(0.3)).current;

    React.useEffect(() => {
        const animateOpacity = () => {
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]).start(() => animateOpacity());
        };

        animateOpacity();
    }, [opacity]);

    return (
        <Animated.View
            style={[
                {
                    width,
                    height,
                    backgroundColor,
                    borderRadius: 4,
                    opacity,
                },
                style,
            ]}
        />
    );
};

// Skeleton para el slider principal
export const SliderSkeleton = () => (
    <View style={{ padding: 20 }}>
        <SkeletonItem width="100%" height={200} style={{ borderRadius: 10, marginBottom: 15 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {[1, 2, 3].map((_, index) => (
                <SkeletonItem
                    key={index}
                    width={8}
                    height={8}
                    style={{
                        borderRadius: 4,
                        marginHorizontal: 4,
                        backgroundColor: 'rgba(255, 215, 0, 0.3)'
                    }}
                />
            ))}
        </View>
    </View>
);

// Skeleton para competencias
export const CompetenciasSkeleton = () => (
    <View style={{ padding: 20 }}>
        <SkeletonItem width={180} height={24} style={{ marginBottom: 15 }} />
        <View style={{ flexDirection: 'row' }}>
            {[1, 2].map((_, index) => (
                <View key={index} style={{ marginRight: 15 }}>
                    <SkeletonItem width={150} height={100} style={{ borderRadius: 8, marginBottom: 8 }} />
                    <SkeletonItem width={120} height={16} style={{ marginBottom: 4 }} />
                    <SkeletonItem width={80} height={12} />
                </View>
            ))}
        </View>
    </View>
);

// Skeleton para regiones
export const RegionesSkeleton = () => (
    <View style={{ padding: 20 }}>
        <SkeletonItem width={120} height={24} style={{ marginBottom: 15 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {[1, 2, 3].map((_, index) => (
                <View key={index} style={{ alignItems: 'center' }}>
                    <SkeletonItem width={80} height={60} style={{ borderRadius: 8, marginBottom: 8 }} />
                    <SkeletonItem width={60} height={14} />
                </View>
            ))}
        </View>
    </View>
);

// Skeleton para noticias
export const NoticiasSkeleton = () => (
    <View style={{ padding: 20 }}>
        <SkeletonItem width={140} height={24} style={{ marginBottom: 15 }} />
        {[1, 2, 3].map((_, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
                <SkeletonItem width={80} height={60} style={{ borderRadius: 8, marginRight: 15 }} />
                <View style={{ flex: 1 }}>
                    <SkeletonItem width="90%" height={16} style={{ marginBottom: 8 }} />
                    <SkeletonItem width="70%" height={14} style={{ marginBottom: 4 }} />
                    <SkeletonItem width="50%" height={12} />
                </View>
            </View>
        ))}
    </View>
);

export default SkeletonItem;