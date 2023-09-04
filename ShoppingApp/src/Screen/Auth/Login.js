import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../../../Assets/images/logoR.png'
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
  text: {
    fontFamily: 'Ariel',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#3B71F3',
    marginVertical: 20,
  },
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onLoginPressed = () => {
    console.warn("Sign in");
  }

  const onForgotPressed = () => {
    console.warn("Forgot Password");
  }

  const onSignUpPressed = () => {
    console.warn("Signup");
  }

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      <CustomInput placeHolder="Username" value={username} setValue={setUsername} />
      <CustomInput placeHolder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
      <CustomButton text="Login" onPress={onLoginPressed} type='Primary'/>

      <CustomButton text="Forgot Password" onPress={onForgotPressed} type='Forgot'/>
      
      <CustomButton text="Don't have an account. Signup." onPress={onSignUpPressed} type='Forgot'/>
    </View>
  )
}

export default Login
