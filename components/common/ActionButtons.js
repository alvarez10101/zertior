// components/common/ActionButtons.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const ActionButtons = ({ buttons }) => {
  return (
    <View style={styles.actionButtonsContainer}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.actionButton,
            { backgroundColor: button.backgroundColor || colors.primary }
          ]}
          onPress={button.onPress}
        >
          {button.icon && (
            <MaterialCommunityIcons
              name={button.icon}
              size={20}
              color="white"
            />
          )}
          <Text style={styles.actionButtonText}>{button.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActionButtons;

// Componente individual para un botón de acción
export const ActionButton = ({
  text,
  icon,
  backgroundColor = colors.primary,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={[styles.actionButton, { backgroundColor }]}
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="white"
        />
      )}
      <Text style={styles.actionButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};