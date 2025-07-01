// components/common/MenuFooter.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const MenuFooter = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Acción por defecto
      console.log('Cerrando sesión...');
      // Aquí puedes agregar la lógica de logout
    }
  };

  return (
    <View style={styles.menuFooter}>
      <TouchableOpacity style={styles.menuFooterButton} onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={20} color={colors.live} />
        <Text style={styles.menuFooterText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuFooter;