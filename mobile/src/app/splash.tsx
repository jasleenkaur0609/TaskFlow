import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TaskFlow</Text>

      <Text style={styles.tagline}>
        Organize your day.{'\n'}
        Get things done.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logo: {
    fontSize: 42,
    fontWeight: '700',
    color: '#222222',
    letterSpacing: 0.5,
  },

  tagline: {
    marginTop: 14,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: '#666666',
  },
});