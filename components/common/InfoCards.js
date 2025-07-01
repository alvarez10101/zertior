// components/common/InfoCards.js
import { Text, View } from 'react-native';
import { styles } from '../../styles/styles';

// Componente para tarjeta de información general
export const InfoCard = ({ children, text }) => {
  return (
    <View style={styles.infoCard}>
      {text ? (
        <Text style={styles.infoText}>{text}</Text>
      ) : (
        children
      )}
    </View>
  );
};

// Componente para tarjeta de detalles con filas
export const DetailCard = ({ details }) => {
  return (
    <View style={styles.detailCard}>
      {details.map((detail, index) => (
        <View key={index} style={styles.detailRow}>
          <Text style={styles.detailLabel}>{detail.label}:</Text>
          <Text style={[
            styles.detailValue,
            detail.color && { color: detail.color }
          ]}>
            {detail.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

// Componente para fila de detalle individual
export const DetailRow = ({ label, value, color }) => {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}:</Text>
      <Text style={[
        styles.detailValue,
        color && { color }
      ]}>
        {value}
      </Text>
    </View>
  );
};