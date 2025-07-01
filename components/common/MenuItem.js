// components/common/MenuItem.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const MenuItem = ({
  title,
  subtitle,
  icon,
  backgroundColor = colors.primary,
  onPress,
  disabled = false
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.menuItem,
        disabled && { opacity: 0.5 }
      ]}
      onPress={!disabled ? onPress : null}
      disabled={disabled}
    >
      <View style={[styles.menuItemIcon, { backgroundColor }]}>
        <MaterialCommunityIcons name={icon} size={20} color="white" />
      </View>
      <View style={styles.menuItemContent}>
        <Text style={styles.menuItemTitle}>{title}</Text>
        {subtitle && (
          <Text style={styles.menuItemSubtitle}>{subtitle}</Text>
        )}
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={20}
        color={colors.textMuted}
      />
    </TouchableOpacity>
  );
};

export default MenuItem;