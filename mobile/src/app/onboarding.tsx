import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';

const onboardingData = [
  {
    title: 'Manage Your Tasks',
    description:
      'Keep all your tasks organized in one place and stay on top of your day.',
    icon: '✓',
  },
  {
    title: 'Stay Organized',
    description:
      'Set priorities, categories and due dates so you always know what needs to be done.',
    icon: '☰',
  },
  {
    title: 'Get Things Done',
    description:
      'Track your progress and complete your tasks with a simple and focused workflow.',
    icon: '★',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPage = onboardingData[currentIndex];

  const isLastPage = currentIndex === onboardingData.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      router.replace('/login');
      return;
    }

    setCurrentIndex(currentIndex + 1);
  };

  const handleSkip = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Pressable onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{currentPage.icon}</Text>
        </View>

        <Text style={styles.title}>{currentPage.title}</Text>

        <Text style={styles.description}>
          {currentPage.description}
        </Text>

        <View style={styles.dotsContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Pressable
          style={styles.nextButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>
            {isLastPage ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  topSection: {
    alignItems: 'flex-end',
    paddingTop: 10,
  },

  skipText: {
    fontSize: 16,
    color: '#666666',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  icon: {
    fontSize: 48,
    color: '#222222',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222222',
    textAlign: 'center',
  },

  description: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 26,
    color: '#666666',
    textAlign: 'center',
    maxWidth: 340,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginTop: 35,
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D0D0D0',
  },

  activeDot: {
    width: 24,
    backgroundColor: '#222222',
  },

  bottomSection: {
    paddingBottom: 20,
  },

  nextButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});