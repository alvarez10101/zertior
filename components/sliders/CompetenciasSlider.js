// components/sliders/CompetenciasSlider.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { competenciasData } from '../../data/mockData';
import { styles } from '../../styles/styles';
import AnimatedCard from '../common/AnimatedCard'; // ✅ AGREGAR ESTE IMPORT


const CompetenciasSlider = ({ navigateToCompetition }) => {
  const getCompetenciaIcon = (tipo) => {
    switch (tipo) {
      case 'futbol':
        return <MaterialCommunityIcons name="soccer" size={24} color="white" />;
      case 'escolar':
        return <MaterialCommunityIcons name="school" size={24} color="white" />;
      case 'padel':
        return <MaterialCommunityIcons name="tennis" size={24} color="white" />;
      case 'tenis':
        return <MaterialCommunityIcons name="racquetball" size={24} color="white" />;
      default:
        return <MaterialCommunityIcons name="trophy" size={24} color="white" />;
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Competencias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {competenciasData.map((comp) => (
          <AnimatedCard
            key={comp.id}
            style={[styles.regionCard, { borderColor: comp.color }]}
            onPress={() => navigateToCompetition(comp)}
          >
            <View style={[styles.regionIcon, { backgroundColor: comp.color }]}>
              {getCompetenciaIcon(comp.tipo)}
            </View>
            <Text style={styles.regionName}>{comp.name}</Text>
            <Text style={styles.regionTeams}>{comp.subcategorias.length} categorías</Text>
          </AnimatedCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default CompetenciasSlider;