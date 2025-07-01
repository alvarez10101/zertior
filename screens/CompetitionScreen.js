// screens/CompetitionScreen.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DynamicHeader from '../components/common/DynamicHeader';
import { colors } from '../constants/colors';
import { styles } from '../styles/styles';

const CompetitionScreen = ({
  selectedCompetition,
  navigateToSubcategory,
  navigateBack,
  navigateToHome
}) => {
  if (!selectedCompetition) return null;

  const getCompetenciaIcon = (tipo) => {
    switch (tipo) {
      case 'futbol':
        return <MaterialCommunityIcons name="soccer" size={24} color="white" />;
      case 'padel':
        return <MaterialCommunityIcons name="tennis" size={24} color="white" />;
      case 'tenis':
        return <MaterialCommunityIcons name="racquetball" size={24} color="white" />;
      default:
        return <MaterialCommunityIcons name="trophy" size={24} color="white" />;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DynamicHeader
        title={selectedCompetition.name}
        navigateBack={navigateBack}
        navigateToHome={navigateToHome}
      />

      {/* Banner de la competencia */}
      <View style={styles.competitionBanner}>
        <View style={[styles.competitionIcon, { backgroundColor: selectedCompetition.color }]}>
          {getCompetenciaIcon(selectedCompetition.tipo)}
        </View>
        <View style={styles.competitionInfo}>
          <Text style={styles.competitionTitle}>{selectedCompetition.name}</Text>
          <Text style={styles.competitionDescription}>{selectedCompetition.description}</Text>
          <Text style={styles.competitionStats}>
            {selectedCompetition.subcategorias.length} categorías disponibles
          </Text>
        </View>
      </View>

      {/* Lista de subcategorías */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selecciona una Categoría</Text>
        {selectedCompetition.subcategorias.map((subcategoria) => (
          <TouchableOpacity
            key={subcategoria.id}
            style={styles.subcategoryCard}
            onPress={() => navigateToSubcategory(subcategoria)}
          >
            <View style={styles.subcategoryContent}>
              <View style={styles.subcategoryIcon}>
                <Text style={styles.subcategoryEmoji}>{subcategoria.icon}</Text>
              </View>
              <View style={styles.subcategoryInfo}>
                <Text style={styles.subcategoryName}>{subcategoria.name}</Text>
                <Text style={styles.subcategoryParticipants}>{subcategoria.participants}</Text>
              </View>
              <View style={styles.subcategoryArrow}>
                <MaterialCommunityIcons name="chevron-right" size={24} color={colors.accent} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Información adicional */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Esta competencia cuenta con múltiples categorías para todos los niveles.
            Selecciona la categoría que más te interese para ver más detalles.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CompetitionScreen;