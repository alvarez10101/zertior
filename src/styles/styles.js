import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header principal
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  liveIndicator: {
    backgroundColor: colors.live,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  liveText: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 12,
    fontWeight: 'bold',
  },

  // Slider principal
  sliderContainer: {
    height: 300,
    marginBottom: 20,
  },
  slide: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    padding: 20,
    alignItems: 'center',
  },
  slideTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#000',
    fontSize: 16,
  },

  // Secciones
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },

  // Competencias
  competitionCard: {
    width: 140,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  competitionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  competitionEmoji: {
    fontSize: 20,
  },
  competitionName: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Regiones
  regionCard: {
    width: 140,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  regionName: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  regionTeams: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
  },

  // Noticias
  noticiaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  noticiaImage: {
    width: 80,
    height: 60,
  },
  noticiaContent: {
    flex: 1,
    padding: 15,
  },
  noticiaTitle: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  noticiaTime: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
  },
  arrowText: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15,
  },

  // Sponsors
  sponsorCard: {
    width: 120,
    height: 60,
    backgroundColor: colors.surface,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  sponsorLogo: {
    width: 100,
    height: 50,
  },

  // Loading
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 40,
  },
  loadingText: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 16,
    color: colors.text,
    marginTop: 20,
    textAlign: 'center',
  },
});
