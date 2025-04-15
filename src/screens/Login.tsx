import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputFields';
import Button from '../components/Button';

type LoginScreenProps = {
  onLoginSuccess: () => void;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onLoginSuccess();
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text>Please login to your account</Text>

      <InputField placeholder="Enter your Mail ID" value={email} onChangeText={setEmail} />
      <InputField placeholder="Enter your Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity>
        <Text style={styles.link}>Forget Password?</Text>
      </TouchableOpacity>

      <Button label="Login" onPress={handleLogin} />

      <TouchableOpacity>
        <Text style={styles.link}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Don’t have an account? Sign Up?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: '#0066FF',
    marginTop: 10,
    textAlign: 'center',
  },
});



