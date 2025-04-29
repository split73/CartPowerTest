import {FlatList} from "react-native"
import UserItem from "./components/UserItem/UserItem.tsx"
import Avatar from "../../assets/images/avatar.svg"
import {useNavigation} from "@react-navigation/native"
import {RootStackParamList} from "../../navigation/RootNavigator.tsx"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import React, {memo} from "react"

type UsersListProps = {
  users: User[]
}

const UsersList = ({users}: UsersListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <FlatList
      data={users}
      renderItem={({item}) =>
        <UserItem
          name={item.name}
          email={item.email}
          Icon={<Avatar width={40} height={40}/>}
          onPress={() => navigation.navigate('UserProfile', {
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website
          })}
        />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default memo(UsersList);