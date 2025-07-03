// components/common/SkeletonLoader.js - LIMPIO Y CORRECTO
import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const SkeletonLoader = ({
    height = 20,
    width = '100%',
    borderRadius = 8,
    style,
    backgroundColor = 'rgba(255,255,255,0.1)'
}) => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const animate = () => {
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0.7,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]).start(() => animate());
        };
        animate();
    }, []);

    return (
        <Animated.View
            style={[
                {
                    height,
                    width,
                    backgroundColor,
                    borderRadius,
                    opacity,
                },
                style,
            ]}
        />
    );
};

// Skeleton para tarjetas de competencias
export const CompetenciasSkeleton = () => (
    <View style={{ padding: 16 }}>
        {/* Título de sección */}
        <SkeletonLoader
            height={28}
            width="40%"
            style={{ marginBottom: 16 }}
        />

        {/* Grid de competencias */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
            {[1, 2, 3].map(i => (
                <View key={i} style={{ flex: 1 }}>
                    {/* Card principal */}
                    <SkeletonLoader
                        height={140}
                        borderRadius={12}
                        style={{ marginBottom: 12 }}
                    />
                    {/* Título */}
                    <SkeletonLoader
                        height={18}
                        width="85%"
                        style={{ marginBottom: 8 }}
                    />
                    {/* Subtítulo */}
                    <SkeletonLoader
                        height={14}
                        width="65%"
                    />
                </View>
            ))}
        </View>
    </View>
);

// Skeleton para lista de noticias
export const NoticiasSkeleton = () => (
    <View style={{ padding: 16 }}>
        {/* Título de sección */}
        <SkeletonLoader
            height={28}
            width="35%"
            style={{ marginBottom: 16 }}
        />

        {/* Lista de noticias */}
        {[1, 2, 3].map(i => (
            <View key={i} style={{
                flexDirection: 'row',
                marginBottom: 16,
                gap: 12,
                alignItems: 'center'
            }}>
                {/* Imagen */}
                <SkeletonLoader
                    height={60}
                    width={60}
                    borderRadius={8}
                />
                {/* Contenido */}
                <View style={{ flex: 1 }}>
                    {/* Título noticia */}
                    <SkeletonLoader
                        height={16}
                        width="90%"
                        style={{ marginBottom: 8 }}
                    />
                    {/* Tiempo */}
                    <SkeletonLoader
                        height={12}
                        width="30%"
                    />
                </View>
            </View>
        ))}
    </View>
);

// Skeleton para regiones
export const RegionesSkeleton = () => (
    <View style={{ padding: 16 }}>
        {/* Título de sección */}
        <SkeletonLoader
            height={28}
            width="30%"
            style={{ marginBottom: 16 }}
        />

        {/* Grid de regiones */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {[1, 2, 3, 4].map(i => (
                <View key={i} style={{
                    width: '47%', // Dos columnas
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 12,
                    padding: 16
                }}>
                    {/* Nombre región */}
                    <SkeletonLoader
                        height={18}
                        width="80%"
                        style={{ marginBottom: 8 }}
                    />
                    {/* Equipos */}
                    <SkeletonLoader
                        height={14}
                        width="50%"
                    />
                </View>
            ))}
        </View>
    </View>
);

// Skeleton para el slider principal
export const SliderSkeleton = () => (
    <View style={{
        height: 250,
        backgroundColor: 'rgba(255,255,255,0.1)',
        margin: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <SkeletonLoader
            height={40}
            width="60%"
            style={{ marginBottom: 12 }}
        />
        <SkeletonLoader
            height={20}
            width="40%"
        />
    </View>
);

export default SkeletonLoader;