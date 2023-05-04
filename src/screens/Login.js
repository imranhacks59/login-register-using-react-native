import React, { useId, useState } from 'react'
import {Button,View, StyleSheet, Text, TextInput} from 'react-native'
import { useDispatch } from 'react-redux';
import { userLogin } from '../action/userAction';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [userId,setUserId] = useState('')
  const [password,setPassword] = useState('');
  const dispatch=useDispatch();
  const navigation = useNavigation();
  const submit=()=>{
    var user={
      userId:userId,
      password:password
    }
     dispatch(userLogin(user))
  // 
     navigation.navigate('Home')
     setUserId('')
     setPassword('')

  }

  return (
    <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
        style={styles.input}
        label="User Id"
        placeholder="Enter your User id"
        mode="outlibed"
        value={userId}
        onChangeText={(value)=>setUserId(value)}
        />

        <TextInput
        style={styles.input}
        label='Password'
        placeholder="Enter your password"
        mode='outlined'
        secureTextEntry={true}
        value={password}
        onChangeText={(value)=>setPassword(value)}
        
        />

        <Button
         onPress={submit}
         style={{marginTop:20}}
         title='Login'
         >
          Login
        </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    // padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
})

export default Login
