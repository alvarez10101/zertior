// components/common/MenuHeader.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const MenuHeader = ({ closeMenu, user = null }) => {
  // Datos por defecto del usuario
  const defaultUser = {
    name: 'Usuario',
    email: 'user@liga.cl'
  };

  const currentUser = user || defaultUser;

  return (
    <View style={styles.menuHeader}>
      <View style={styles.menuHeaderContent}>
        <MaterialCommunityIcons
          name="account-circle"
          size={40}
          color={colors.accent}
        />
        <View style={styles.menuUserInfo}>
          <Text style={styles.menuUserName}>{currentUser.name}</Text>
          <Text style={styles.menuUserEmail}>{currentUser.email}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.closeMenuButton} onPress={closeMenu}>
        <MaterialCommunityIcons name="close" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuHeader;