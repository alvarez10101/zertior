// components/sections/NoticiasSection.js
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { noticias } from '../../data/mockData';
import { styles } from '../../styles/styles';

const NoticiasSection = () => {
  const handleNoticiaPress = (enlace) => {
    Linking.openURL(enlace);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Últimas Noticias</Text>
      {noticias.map((noticia) => (
        <TouchableOpacity
          key={noticia.id}
          style={styles.noticiaCard}
          onPress={() => handleNoticiaPress(noticia.enlace)}
        >
          <Image source={noticia.imagen} style={styles.noticiaImage} />
          <View style={styles.noticiaContent}>
            <Text style={styles.noticiaTitle}>{noticia.titulo}</Text>
            <Text style={styles.noticiaTime}>{noticia.time}</Text>
          </View>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NoticiasSection;