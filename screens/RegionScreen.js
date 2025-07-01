// screens/RegionScreen.js
import { Animated } from 'react-native';
import LigasList from '../components/common/LigasList';
import RegionHeader from '../components/common/RegionHeader';
import TabContent from '../components/common/TabContent';
import TabNavigation from '../components/common/TabNavigation';
import RegionSlider from '../components/sliders/RegionSlider';
import { styles } from '../styles/styles';

const RegionScreen = ({
  selectedRegion,
  selectedTab,
  setSelectedTab,
  setCurrentScreen,
  scrollY
}) => {
  return (
    <Animated.ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    >
      <RegionHeader
        selectedRegion={selectedRegion}
        setCurrentScreen={setCurrentScreen}
      />
      <RegionSlider selectedRegion={selectedRegion} />
      <LigasList selectedRegion={selectedRegion} />
      <TabNavigation
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TabContent selectedTab={selectedTab} />
    </Animated.ScrollView>
  );
};

export default RegionScreen;