// components/sliders/MainSlider.js
import { Feather } from '@expo/vector-icons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { sliderData } from '../../data/mockData';
import { styles } from '../../styles/styles';

const { width } = Dimensions.get('window');

const SlideItem = ({ item }) => {
  const isVideo = item.type === 'video' && item.uri;
  const [isMuted, setIsMuted] = useState(true);

  const player = useVideoPlayer(
    isVideo ? item.uri : null,
    (pl) => {
      if (pl) {
        pl.loop = true;
        pl.play();
      }
    }
  );

  useEffect(() => {
    if (player) {
      player.muted = isMuted;
    }
  }, [isMuted, player]);

  if (isVideo) {
    return (
      <View style={[styles.slide, { backgroundColor: item.bg }]}>
        <View style={styles.videoWrapper}>
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            contentFit="cover"
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.muteButton}
            onPress={() => setIsMuted((prev) => !prev)}
          >
            <Feather
              name={isMuted ? 'volume-x' : 'volume-2'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.videoOverlay} />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.slide, { backgroundColor: item.bg }]}>
      <View style={styles.slideContent}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <View style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </View>
      <View style={styles.slideGradient} />
    </View>
  );
};

const MainSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveSlide(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50
  }).current;

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={sliderData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SlideItem item={item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={3}
        removeClippedSubviews={false}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Indicadores de puntos */}
      <View style={styles.sliderDotsContainer}>
        {sliderData.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.6, 1],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [colors.textMuted, colors.accent, colors.textMuted],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  transform: [{ scale }],
                  backgroundColor,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default MainSlider;