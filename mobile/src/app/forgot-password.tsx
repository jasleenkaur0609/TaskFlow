import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Password reset requested for:', email);
  };

  const handleBackToLogin = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backText}>‹</Text>
            </Pressable>

            <Text style={styles.logo}>TaskFlow</Text>

            <Text style={styles.title}>Forgot Password?</Text>

            <Text style={styles.subtitle}>
              Enter the email address associated with your account and
              we'll send you instructions to reset your password.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <Pressable
              style={styles.resetButton}
              onPress={handleResetPassword}
            >
              <Text style={styles.resetButtonText}>
                SEND RESET LINK
              </Text>
            </Pressable>

            <Pressable
              style={styles.loginButton}
              onPress={handleBackToLogin}
            >
              <Text style={styles.loginButtonText}>
                Back to Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  keyboardContainer: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: 'center',
  },

  header: {
    marginBottom: 35,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  backText: {
    fontSize: 32,
    lineHeight: 34,
    color: '#222222',
    marginTop: -3,
  },

  logo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 35,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 25,
    color: '#666666',
  },

  form: {
    width: '100%',
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#222222',
    backgroundColor: '#FAFAFA',
  },

  resetButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  loginButton: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  loginButtonText: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '600',
  },
});