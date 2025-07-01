// components/common/DynamicHeader.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const DynamicHeader = ({ title, navigateBack, navigateToHome }) => {
  return (
    <View style={styles.dynamicHeader}>
      <TouchableOpacity style={styles.backButton} onPress={navigateBack}>
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.homeButton} onPress={navigateToHome}>
        <MaterialCommunityIcons name="home" size={20} color={colors.accent} />
      </TouchableOpacity>
    </View>
  );
};

export default DynamicHeader;