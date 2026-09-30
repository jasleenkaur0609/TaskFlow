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

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  router.replace('/dashboard');
};

  const handleRegister = () => {
    router.push('/register');
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
          <View style={styles.header}>
            <Text style={styles.logo}>TaskFlow</Text>

            <Text style={styles.title}>Welcome Back 👋</Text>

            <Text style={styles.subtitle}>
              Login to continue managing your tasks.
            </Text>
          </View>

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

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#999999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <Pressable
  style={styles.forgotButton}
  onPress={() => router.push('/forgot-password')}
>
  <Text style={styles.forgotText}>
    Forgot Password?
  </Text>
</Pressable>

            <Pressable
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>
                LOGIN
              </Text>
            </Pressable>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>
                Don't have an account?
              </Text>

              <Pressable onPress={handleRegister}>
                <Text style={styles.registerLink}>
                  Create Account
                </Text>
              </Pressable>
            </View>
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
    paddingVertical: 40,
    justifyContent: 'center',
  },

  header: {
    marginBottom: 40,
  },

  logo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 45,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
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

  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },

  forgotText: {
    fontSize: 14,
    color: '#555555',
    fontWeight: '500',
  },

  loginButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 5,
  },

  registerText: {
    fontSize: 15,
    color: '#666666',
  },

  registerLink: {
    fontSize: 15,
    color: '#222222',
    fontWeight: '700',
  },
});