import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import GradientButton from '@/components/button';
import GradientText from '@/components/gradient-text';
import ParallaxScrollView from '@/components/parallax-scroll-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <GradientText
        text="Gradient Text"
        style={{
          fontSize: 28,
          fontWeight: '700',
        }}
      />
      <GradientButton
        text="Primary Button"
        onPress={() => { }}
      />

      <GradientButton
        text="Secondary Button"
        type="secondary"
        onPress={() => { }}
      />

      <GradientButton
        text={
          <GradientText
            text="Primary"
            style={{ fontSize: 24, fontWeight: '600' }}
          />
        }
        type="secondary"
        onPress={() => { }}
      />

      <GradientButton
        text="Animation Button"
        type="secondary"
        isAnimate={true}
        onPress={() => { }}
      />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
