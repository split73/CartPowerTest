import UsersList from "../../components/UsersList/UsersList.tsx"
import {useCallback, useEffect, useState} from "react"
import {ActivityIndicator, StyleSheet, Switch, TextInput, View} from "react-native"
import axios from "axios"
import { debounce } from 'lodash'
import {useTheme} from "../../context/ThemeContext.tsx"

const Home = () => {
  const [userName, setUserName] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { theme, toggleTheme, isDark } = useTheme()


  const getUsers = async () => {
    setIsLoading(true)

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const users = response.data

      setUsers(users)

      if (userName) {
        setFilteredUsers(
          users.filter((user: User) =>
            user.name.toLowerCase().includes(userName.toLowerCase())
          ))
      } else {
        setFilteredUsers(users)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const debouncedFilter = useCallback(debounce((text: string) => {
    const tmpFilteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredUsers(tmpFilteredUsers);
  }, 200), [users])

  const handleChange = (text: string) => {
    debouncedFilter(text)
    setUserName(text)
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background}}>
      <Switch value={isDark} onValueChange={toggleTheme}/>
      <TextInput style={styles.input} onChangeText={handleChange} value={userName}/>
      {isLoading
        ? <ActivityIndicator />
        : <UsersList users={filteredUsers}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    margin: 10
  }
});

export default Home