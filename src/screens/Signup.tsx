import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputFields';
import Button from '../components/Button';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

type Props = NativeStackScreenProps<any>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>
      <Text>Please fill the form to continue</Text>

      <InputField placeholder="Enter your Full name" value={name} onChangeText={setName} />
      <InputField placeholder="Enter your Email Address" value={email} onChangeText={setEmail} />
      <InputField placeholder="Enter your Phone No" value={phone} onChangeText={setPhone} />

      <Button label="Sign Up" onPress={() => navigation.navigate('Otp')} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20, 
      justifyContent: 'center', 
      backgroundColor: '#fff'
    },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginBottom: 10 
    },
    link: { 
      color: '#0066FF', 
      marginTop: 10, 
      textAlign: 'center' 
    },
});

export default SignupScreen;
