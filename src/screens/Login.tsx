import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputFields';
import Button from '../components/Button';

type LoginScreenProps = {
  onLoginSuccess: () => void;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [phoneNumber, setEmail] = useState('8917507054');
  const [password, setPassword] = useState('1234');

  const login = () => {
    if (phoneNumber && password) {
      onLoginSuccess();
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text>Please login to your account</Text>
      <InputField placeholder="Enter your Mail ID/Phone Number" value={phoneNumber} onChangeText={setEmail} />
      <InputField placeholder="Enter your Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.link}>Forget Password?</Text>
      </TouchableOpacity>
      <Button label="Login" onPress={login} />
      <TouchableOpacity>
        <Text style={styles.link}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Don’t have an account? Sign Up?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
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



