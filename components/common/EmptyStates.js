// components/common/EmptyStates.js
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

const EmptyState = ({
    icon,
    title,
    description,
    actionText,
    onAction,
    style
}) => (
    <View style={[{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    }, style]}>
        <View style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: 24,
            borderRadius: 50,
            marginBottom: 24
        }}>
            <Feather name={icon} size={48} color="#6B7280" />
        </View>

        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: 8
        }}>
            {title}
        </Text>

        <Text style={{
            fontSize: 16,
            color: '#9CA3AF',
            textAlign: 'center',
            lineHeight: 24,
            marginBottom: 24
        }}>
            {description}
        </Text>

        {actionText && onAction && (
            <TouchableOpacity
                style={{
                    backgroundColor: '#3B82F6',
                    paddingHorizontal: 24,
                    paddingVertical: 12,
                    borderRadius: 25,
                    elevation: 2,
                    shadowColor: '#3B82F6',
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 4 }
                }}
                onPress={onAction}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontWeight: '600',
                    fontSize: 16
                }}>
                    {actionText}
                </Text>
            </TouchableOpacity>
        )}
    </View>
);

// Estados específicos para tu app
export const NoCompetenciasEmpty = ({ onRefresh }) => (
    <EmptyState
        icon="trophy"
        title="No hay competencias"
        description="Parece que no hay competencias disponibles en este momento. ¡Vuelve a intentarlo!"
        actionText="Actualizar"
        onAction={onRefresh}
    />
);

export const NoNoticiasEmpty = ({ onRefresh }) => (
    <EmptyState
        icon="newspaper"
        title="Sin noticias"
        description="No hay noticias deportivas disponibles. Te mantendremos informado cuando tengamos novedades."
        actionText="Recargar"
        onAction={onRefresh}
    />
);

export const NoEquiposEmpty = ({ onAddTeam }) => (
    <EmptyState
        icon="users"
        title="No hay equipos"
        description="Aún no se han registrado equipos para esta competencia."
        actionText="Agregar Equipo"
        onAction={onAddTeam}
    />
);

export const ErrorState = ({ onRetry }) => (
    <EmptyState
        icon="wifi-off"
        title="Error de conexión"
        description="No pudimos cargar el contenido. Verifica tu conexión a internet."
        actionText="Reintentar"
        onAction={onRetry}
    />
);

export default EmptyState;