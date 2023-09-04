import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
  },
});

const CustomInput = ({value, setValue, placeHolder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeHolder} secureTextEntry={secureTextEntry} style={styles.input}/>
    </View>
  )
}

export default CustomInput