// components/sliders/RegionesSlider.js - Con animaciones
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { regiones } from '../../data/mockData';
import { styles } from '../../styles/styles';
import AnimatedCard from '../common/AnimatedCard';

const RegionesSlider = ({ setSelectedRegion, setCurrentScreen }) => {
  const handleRegionPress = (region) => {
    setSelectedRegion(region);
    setCurrentScreen('region');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Regiones</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {regiones.map((region, index) => (
          <AnimatedCard
            key={region.id}
            delay={index * 120} // Animación escalonada más lenta
            style={[styles.regionCard, { borderColor: region.color }]}
            onPress={() => handleRegionPress(region)}
          >
            <View style={[styles.regionIcon, { backgroundColor: region.color }]}>
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.regionName}>{region.name}</Text>
            <Text style={styles.regionTeams}>{region.teams} equipos</Text>
          </AnimatedCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default RegionesSlider;