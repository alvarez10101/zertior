// components/sliders/RegionesSlider.js
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { regiones } from '../../data/mockData';
import { styles } from '../../styles/styles';

const RegionesSlider = ({ setSelectedRegion, setCurrentScreen }) => {
  const handleRegionPress = (region) => {
    setSelectedRegion(region);
    setCurrentScreen('region');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Regiones</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {regiones.map((region) => (
          <TouchableOpacity
            key={region.id}
            style={[styles.regionCard, { borderColor: region.color }]}
            onPress={() => handleRegionPress(region)}
          >
            <Text style={styles.regionName}>{region.name}</Text>
            <Text style={styles.regionTeams}>{`${region.teams} equipos`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RegionesSlider;