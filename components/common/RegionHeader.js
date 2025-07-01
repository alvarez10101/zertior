// components/common/RegionHeader.js
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/styles';

const RegionHeader = ({ selectedRegion, setCurrentScreen }) => {
  const handleBackPress = () => {
    setCurrentScreen('home');
  };

  return (
    <View style={styles.regionHeader}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBackPress}
      >
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.regionTitle}>{selectedRegion?.name}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

export default RegionHeader;