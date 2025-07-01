// components/sliders/RegionSlider.js
import { Text, View } from 'react-native';
import { styles } from '../../styles/styles';

const RegionSlider = ({ selectedRegion }) => {
  if (!selectedRegion) return null;

  return (
    <View style={styles.regionSliderContainer}>
      <View style={[styles.regionSlide, { backgroundColor: selectedRegion.color + '20' }]}>
        <Text style={styles.regionSlideTitle}>
          Ligas de {selectedRegion.name}
        </Text>
        <Text style={styles.regionSlideSubtitle}>
          {`${selectedRegion.teams} equipos participando`}
        </Text>
      </View>
    </View>
  );
};

export default RegionSlider;