// components/sections/SponsorsSection.js
import { Image, ScrollView, Text, View } from 'react-native';
import { sponsors } from '../../data/mockData';
import { styles } from '../../styles/styles';

const SponsorsSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Sponsors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sponsors.map((sponsor) => (
          <View key={sponsor.id} style={styles.sponsorCard}>
            <Image
              source={sponsor.logo}
              style={styles.sponsorLogo}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SponsorsSection;