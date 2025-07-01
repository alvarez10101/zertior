// screens/SubcategoryScreen.js
import { ScrollView, Text, View } from 'react-native';
import ActionButtons from '../components/common/ActionButtons';
import DynamicHeader from '../components/common/DynamicHeader';
import { DetailCard } from '../components/common/InfoCards';
import TabContent from '../components/common/TabContent';
import TabNavigation from '../components/common/TabNavigation';
import { colors } from '../constants/colors';
import { styles } from '../styles/styles';

const SubcategoryScreen = ({
  selectedSubcategory,
  selectedCompetition,
  selectedTab,
  setSelectedTab,
  navigateBack,
  navigateToHome
}) => {
  if (!selectedSubcategory || !selectedCompetition) return null;

  // Datos para la tarjeta de detalles
  const subcategoryDetails = [
    { label: 'Participantes', value: selectedSubcategory.participants },
    { label: 'Estado', value: 'Activo', color: colors.success },
    { label: 'Modalidad', value: 'Torneo' }
  ];

  // Configuración de botones de acción
  const actionButtons = [
    {
      text: 'Ver Fixture',
      icon: 'calendar',
      backgroundColor: colors.primary,
      onPress: () => console.log('Ver Fixture pressed')
    },
    {
      text: 'Posiciones',
      icon: 'trophy',
      backgroundColor: colors.success,
      onPress: () => console.log('Posiciones pressed')
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DynamicHeader
        title={selectedSubcategory.name}
        navigateBack={navigateBack}
        navigateToHome={navigateToHome}
      />

      {/* Banner de la subcategoría */}
      <View style={styles.subcategoryBanner}>
        <View style={styles.subcategoryMainIcon}>
          <Text style={styles.subcategoryMainEmoji}>{selectedSubcategory.icon}</Text>
        </View>
        <View style={styles.subcategoryMainInfo}>
          <Text style={styles.subcategoryMainTitle}>{selectedSubcategory.name}</Text>
          <Text style={styles.subcategoryMainCompetition}>{selectedCompetition.name}</Text>
          <Text style={styles.subcategoryMainParticipants}>{selectedSubcategory.participants}</Text>
        </View>
      </View>

      {/* Navegación por tabs */}
      <TabNavigation
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TabContent selectedTab={selectedTab} />

      {/* Información específica de la subcategoría */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalles de la Categoría</Text>
        <DetailCard details={subcategoryDetails} />
      </View>

      {/* Acciones rápidas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acciones</Text>
        <ActionButtons buttons={actionButtons} />
      </View>
    </ScrollView>
  );
};

export default SubcategoryScreen;