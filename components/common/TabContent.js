// components/common/TabContent.js
import { Text, View } from 'react-native';
import { styles } from '../../styles/styles';

const TabContent = ({ selectedTab }) => {
  const content = {
    fixture: 'Próximos partidos de la liga',
    posiciones: 'Tabla de posiciones actual',
    equipos: 'Lista de equipos participantes',
    estadisticas: 'Estadísticas y datos'
  };

  return (
    <View style={styles.tabContent}>
      <Text style={styles.tabContentText}>
        {content[selectedTab]}
      </Text>
    </View>
  );
};

export default TabContent;