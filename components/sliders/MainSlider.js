// components/sliders/MainSlider.js - CORREGIDO PARA ANDROID
import { Feather } from '@expo/vector-icons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Platform, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { sliderData } from '../../data/mockData';
import { styles } from '../../styles/styles';

const { width } = Dimensions.get('window');

const SlideItem = ({ item, isActive, slideIndex }) => {
  const isVideo = item.type === 'video' && item.uri;
  const [isMuted, setIsMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);
  const lastPosition = useRef(0);

  const isLocalVideo = typeof item.uri === 'number';

  const player = useVideoPlayer(
    isVideo ? item.uri : null,
    (pl) => {
      if (pl) {
        pl.loop = true;
        playerRef.current = pl;
        setPlayerReady(true);

        // ✅ CONFIGURACIÓN ESPECÍFICA PARA ANDROID
        if (Platform.OS === 'android') {
          pl.showNowPlayingNotification = false;
          pl.audioMixingMode = 'mixWithOthers';
        }

        if (isLocalVideo && isActive) {
          if (lastPosition.current > 0) {
            pl.currentTime = lastPosition.current;
          }
          setTimeout(() => pl.play(), 100);
        } else {
          pl.pause();
        }
      }
    }
  );

  useEffect(() => {
    if (playerRef.current && playerReady && isVideo) {
      if (isActive) {
        if (isLocalVideo && slideIndex === 0) {
          playerRef.current.play();
        } else {
          playerRef.current.play();
        }
      } else {
        if (isLocalVideo && slideIndex === 0 && playerRef.current.currentTime) {
          lastPosition.current = playerRef.current.currentTime;
        }
        playerRef.current.pause();
      }
    }
  }, [isActive, playerReady, isVideo, slideIndex, isLocalVideo]);

  useEffect(() => {
    if (playerRef.current && playerReady) {
      playerRef.current.muted = isMuted;
    }
  }, [isMuted, playerReady]);

  if (isVideo) {
    return (
      <View style={[styles.slide, { backgroundColor: item.bg }]}>
        <View style={styles.videoWrapper}>
          <VideoView
            style={styles.video}
            player={player}
            contentFit="cover"
            // ✅ CONFIGURACIÓN CRÍTICA PARA ANDROID
            nativeControls={false}
            allowsFullscreen={false}
            allowsPictureInPicture={false}
            showsTimecodes={false}
            requiresLinearPlayback={false}
            // ✅ PROPS ESPECÍFICAS PARA ANDROID
            {...(Platform.OS === 'android' && {
              useNativeControls: false,
              showsPlaybackControls: false,
              controlsStyle: 'none',
              hideControlsTimerDuration: 0,
            })}
          />

          {/* ✅ OVERLAY TRANSPARENTE PARA BLOQUEAR CONTROLES */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'transparent',
              zIndex: 1,
            }}
            pointerEvents="box-none"
          />

          <TouchableOpacity
            style={[styles.muteButton, { zIndex: 2 }]} // ✅ zIndex mayor
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
  const isChangingSlide = useRef(false);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0 && !isChangingSlide.current) {
      const newActiveSlide = viewableItems[0].index || 0;

      if (newActiveSlide !== activeSlide) {
        isChangingSlide.current = true;
        setActiveSlide(newActiveSlide);

        setTimeout(() => {
          isChangingSlide.current = false;
        }, 200);
      }
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
    minimumViewTime: 100,
    waitForInteraction: false
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
        renderItem={({ item, index }) => (
          <SlideItem
            item={item}
            isActive={index === activeSlide}
            slideIndex={index}
          />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);

          if (slideIndex !== activeSlide && slideIndex >= 0 && slideIndex < sliderData.length) {
            setActiveSlide(slideIndex);
          }
        }}
        scrollEventThrottle={16}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        initialNumToRender={3}
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