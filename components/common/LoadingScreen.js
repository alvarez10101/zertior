// components/common/LoadingScreen.js
import { ActivityIndicator, Image, SafeAreaView, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from '../../styles/styles';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loadingContainer}>
        <Image
          source={require('../../assets/img/zertior.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <ActivityIndicator
          size="large"
          color={colors.accent}
          style={{ marginTop: 30 }}
        />
        <Text style={styles.loadingText}>Cargando fuentes...</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;