import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

type Props = NativeStackScreenProps<any>;

const OtpScreen: React.FC<Props> = ({ navigation }) => {
  const handleVerify = () => {
    navigation.navigate('Login'); 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your OTP</Text>
      <Text>04 digit code has been sent to your mobile number <Text style={{ fontWeight: 'bold' }}>+91 99999999</Text></Text>
      <View style={styles.otpRow}>
        {[1, 2, 3, 4].map((_, index) => (
          <View key={index} style={styles.otpBox} />
        ))}
      </View>
      <Text style={{ marginTop: 10 }}>Resend code in 43 seconds</Text>
      <Button label="Verify OTP" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:
      { 
        flex: 1, 
        padding: 20, 
        justifyContent: 'center', 
        backgroundColor: '#fff' 
      },
    title: 
      { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10 
      },
    otpRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 20 
      },
    otpBox: 
    { 
      width: 50, 
      height: 50, 
      backgroundColor: '#eee',
      borderRadius: 8 
    },
});

export default OtpScreen;
