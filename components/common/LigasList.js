// components/common/LigasList.js
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { ligas } from '../../data/mockData';
import { styles } from '../../styles/styles';

const LigasList = ({ selectedRegion }) => {
  const regionLigas = ligas[selectedRegion?.id] || [];

  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>{`Total: ${regionLigas.length} Ligas Activas`}</Text>
      {regionLigas.map((liga) => (
        <TouchableOpacity key={liga.id} style={styles.ligaCard}>
          <View style={styles.ligaContent}>
            <View style={styles.ligaInfo}>
              <Text style={styles.ligaName}>{liga.name || 'Sin nombre'}</Text>
              <Text style={styles.ligaTeams}>{`${liga.teams} equipos`}</Text>
            </View>
            <View style={[
              styles.ligaStatus,
              { backgroundColor: liga.status === 'EN VIVO' ? colors.live : colors.border }
            ]}>
              <Text style={styles.ligaStatusText}>{liga.status}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LigasList;