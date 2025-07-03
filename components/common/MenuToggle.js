// components/common/MenuToggle.js - Volver al original
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const MenuToggle = ({ onPress, text = 'MENÚ', icon = 'menu' }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (global.openSideMenu) {
      global.openSideMenu();
    }
  };

  return (
    <TouchableOpacity
      style={styles.liveIndicator}
      onPress={handlePress}
    >
      <MaterialCommunityIcons name={icon} size={16} color={colors.text} />
      <Text style={styles.liveText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuToggle;