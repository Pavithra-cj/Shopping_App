import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 400,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#051C60',
    marginVertical: 20,
  },
});

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const {height} = useWindowDimensions();

  const onRegisterPressed = () => {
    console.warn("Register");
  }

  const onSignInPressed = () => {
    console.warn("Signin");
  }

  return (
    <View style={styles.root}>
    <Text style={styles.title}>Create an account.</Text>
      <CustomInput placeHolder="Username" value={username} setValue={setUsername} />
      <CustomInput placeHolder="Email" value={email} setValue={setEmail} />
      <CustomInput placeHolder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
      <CustomInput placeHolder="Confirm Password" value={confirmPw} setValue={setConfirmPw} secureTextEntry={true} />
      <CustomButton text="Register" onPress={onRegisterPressed} type='Primary'/>
      
      <CustomButton text="Already have an Account. SignIn." onPress={onSignInPressed} type='Forgot'/>
    </View>
  )
}

export default Register
