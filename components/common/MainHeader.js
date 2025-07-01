// components/common/MainHeader.js
import { Animated, Image, View } from 'react-native';
import { styles } from '../../styles/styles';
import MenuToggle from './MenuToggle';

const MainHeader = ({ scrollY }) => {
  const headerBackground = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [`rgba(26,54,93,1)`, `rgba(26,54,93,0.5)`],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.mainHeader,
        {
          backgroundColor: headerBackground,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100
        }
      ]}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/img/zertior.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <MenuToggle />
    </Animated.View>
  );
};

export default MainHeader;