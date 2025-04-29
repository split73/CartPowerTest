import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

interface UserItemProps {
  name: string
  email: string
  Icon: React.ReactNode
  onPress: () => void
}

const UserItem = ({name, email, Icon, onPress}: UserItemProps) => {
  return (
    <TouchableOpacity style={styles.userContainer} onPress={onPress}>
      {Icon}
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});

export default UserItem
