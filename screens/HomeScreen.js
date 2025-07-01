// screens/HomeScreen.js
import { Animated, View } from 'react-native';
import MainHeader from '../components/common/MainHeader';
import NoticiasSection from '../components/sections/NoticiasSection';
import SponsorsSection from '../components/sections/SponsorsSection';
import CompetenciasSlider from '../components/sliders/CompetenciasSlider';
import MainSlider from '../components/sliders/MainSlider';
import RegionesSlider from '../components/sliders/RegionesSlider';

const HomeScreen = ({
  scrollY,
  scrollRef,
  navigateToCompetition,
  setSelectedRegion,
  setCurrentScreen
}) => {
  return (
    <View style={{ flex: 1 }}>
      <MainHeader scrollY={scrollY} />
      <Animated.ScrollView
        ref={scrollRef}
        style={{ flex: 1, paddingTop: 60 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <MainSlider />
        <CompetenciasSlider navigateToCompetition={navigateToCompetition} />
        <RegionesSlider
          setSelectedRegion={setSelectedRegion}
          setCurrentScreen={setCurrentScreen}
        />
        <NoticiasSection />
        <SponsorsSection />
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;