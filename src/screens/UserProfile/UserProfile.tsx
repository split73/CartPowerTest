import React from 'react'
import {Text, View} from 'react-native'
import {RouteProp} from '@react-navigation/native'

type UserProfileParams = {
  UserProfile: {
    name: string
    email: string
    phone: string
    website: string
  }
}

type UserProfileRouteProp = RouteProp<UserProfileParams, 'UserProfile'>

interface UserProfileProps {
  route: UserProfileRouteProp;
}

const UserProfile = ({route}: UserProfileProps) => {
  const {name, email, phone, website} = route.params

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>{name}</Text>
      <Text style={{fontSize: 16, color: 'gray'}}>{email}</Text>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>{phone}</Text>
      <Text style={{fontSize: 16, color: 'gray'}}>{website}</Text>
    </View>
  )
}

export default UserProfile