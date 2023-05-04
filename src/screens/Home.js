import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const Home = () => {
  const {userData} = useSelector((state)=>state.user)
  return (
    <View style={styles.container}>
     <Text style={styles.greet}>Hello {userData.userId}</Text>    
     <Text>Are you looking for Microservices courses. please visit our Office or just 
       drop a call on 8427381022.Thank you for fill this form.
      </Text>
      <Text>your password is {userData.password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  greet:{
  
    fontWeight: 'bold',
  }

})

export default Home