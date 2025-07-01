// styles/styles.js
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // ========================================
  // ESTILOS GENERALES
  // ========================================
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    padding: 20,
  },

  // ========================================
  // LOADING SCREEN
  // ========================================
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 40,
  },
  loadingText: {
    fontFamily: 'System',
    fontSize: 16,
    color: colors.text,
    marginTop: 20,
    textAlign: 'center',
  },

  // ========================================
  // HEADERS
  // ========================================
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dynamicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontFamily: 'DAZNOscine-Bold',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 120,
    height: 40,
  },

  // Botones de navegación
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
  },
  homeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Menu toggle
  liveIndicator: {
    backgroundColor: colors.live,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveText: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  },

  // ========================================
  // SLIDER PRINCIPAL
  // ========================================
  sliderContainer: {
    height: 300,
    marginBottom: 20,
  },
  slide: {
    width: width,
    height: 300,
    backgroundColor: 'black',
  },
  videoWrapper: {
    position: 'relative',
    width: width,
    height: 300,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  videoOverlay: {
    width: width,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  muteButton: {
    position: 'absolute',
    bottom: 20,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 8,
    zIndex: 10,
  },
  slideContent: {
    padding: 20,
    zIndex: 2,
  },
  slideTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
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
    marginLeft: 3,
  },
  slideGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  // Indicadores del slider
  sliderDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },

  // ========================================
  // TÍTULOS Y TEXTOS
  // ========================================
  sectionTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },
  subtitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },

  // ========================================
  // TARJETAS (REGIONES/COMPETENCIAS)
  // ========================================
  regionCard: {
    width: 140,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    borderWidth: 2,
    alignItems: 'center',
  },
  regionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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

  // ========================================
  // NOTICIAS
  // ========================================
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
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  noticiaContent: {
    flex: 1,
    padding: 10,
  },
  noticiaTitle: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    marginLeft: 10,
  },
  noticiaTime: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
    marginLeft: 10,
  },
  arrowText: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15,
  },

  // ========================================
  // SPONSORS
  // ========================================
  sponsorCard: {
    width: 120,
    height: 60,
    backgroundColor: colors.surface,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sponsorLogo: {
    width: 100,
    height: 60,
  },

  // ========================================
  // PANTALLA DE COMPETENCIAS
  // ========================================
  competitionBanner: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  competitionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  competitionInfo: {
    flex: 1,
  },
  competitionTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  competitionDescription: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 5,
  },
  competitionStats: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 12,
    color: colors.accent,
    fontWeight: '600',
  },

  // ========================================
  // SUBCATEGORÍAS
  // ========================================
  subcategoryCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  subcategoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  subcategoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  subcategoryEmoji: {
    fontSize: 24,
  },
  subcategoryInfo: {
    flex: 1,
  },
  subcategoryName: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  subcategoryParticipants: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: colors.textMuted,
  },
  subcategoryArrow: {
    marginLeft: 10,
  },

  // Banner de subcategoría
  subcategoryBanner: {
    backgroundColor: colors.surface,
    margin: 20,
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  subcategoryMainIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  subcategoryMainEmoji: {
    fontSize: 40,
  },
  subcategoryMainInfo: {
    alignItems: 'center',
  },
  subcategoryMainTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  subcategoryMainCompetition: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 16,
    color: colors.accent,
    marginBottom: 5,
  },
  subcategoryMainParticipants: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: colors.textMuted,
  },

  // ========================================
  // NAVEGACIÓN POR TABS
  // ========================================
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    margin: 20,
    borderRadius: 12,
    padding: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: colors.accent,
  },
  tabIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  tabText: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  activeTabText: {
    fontFamily: 'DAZNOscine-Bold',
    color: '#000',
  },
  tabContent: {
    padding: 20,
    alignItems: 'center',
  },
  tabContentText: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 16,
    textAlign: 'center',
  },

  // ========================================
  // TARJETAS DE INFORMACIÓN
  // ========================================
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
  },
  infoText: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  detailCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  detailLabel: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
  },
  detailValue: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: colors.text,
    fontWeight: 'bold',
  },

  // ========================================
  // BOTONES DE ACCIÓN
  // ========================================
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -7.5,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 7.5,
  },
  actionButtonText: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  // ========================================
  // PANTALLA DE REGIÓN
  // ========================================
  regionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  regionTitle: {
    fontFamily: 'DAZNOscine-Bold',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  regionSliderContainer: {
    height: 120,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  regionSlide: {
    flex: 1,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
  },
  regionSlideTitle: {
    fontFamily: 'DAZNOscine-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  regionSlideSubtitle: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 14,
  },

  // ========================================
  // LIGAS
  // ========================================
  ligaCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  ligaContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ligaInfo: {
    flex: 1,
  },
  ligaName: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  ligaTeams: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
  },
  ligaStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  ligaStatusText: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 10,
    fontWeight: 'bold',
  },

  // ========================================
  // MENÚ LATERAL
  // ========================================
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
    zIndex: 1000,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 300,
    backgroundColor: colors.surface,
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Header del menú
  menuHeader: {
    backgroundColor: colors.surfaceLight,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  menuHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuUserInfo: {
    marginLeft: 12,
    flex: 1,
  },
  menuUserName: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuUserEmail: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  closeMenuButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Contenido del menú
  menuContent: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  menuItemIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  menuItemSubtitle: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },

  // Footer del menú
  menuFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  menuFooterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.live,
  },
  menuFooterText: {
    fontFamily: 'DAZNOscine-Bold',
    color: colors.live,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});