import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

const NoticiasSection = () => {
  const noticias = [
    {
      id: 1,
      titulo: 'Campeonato Juvenil 2025',
      time: '2h',
    },
    {
      id: 2,
      titulo: 'Final de la Copa Metropolitana',
      time: '5h',
    },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{
        fontFamily: 'DAZNOscine-Bold',
        fontSize: 20,
        color: colors.text,
        marginBottom: 15,
        fontWeight: 'bold'
      }}>
        Noticias
      </Text>
      {noticias.map((noticia) => (
        <TouchableOpacity
          key={noticia.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.surface,
            borderRadius: 12,
            marginBottom: 10,
            padding: 15,
          }}
        >
          <View style={{
            width: 60,
            height: 60,
            backgroundColor: colors.accent,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}>
            <Text style={{ fontSize: 24 }}>📰</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{
              fontFamily: 'DAZNOscine-Bold',
              color: colors.text,
              fontSize: 16,
              fontWeight: '500',
              marginBottom: 5,
            }}>
              {noticia.titulo}
            </Text>
            <Text style={{
              fontFamily: 'DAZNOscine-Bold',
              color: colors.textMuted,
              fontSize: 12,
            }}>
              {noticia.time}
            </Text>
          </View>
          <Text style={{
            color: colors.accent,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            ›
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NoticiasSection;
