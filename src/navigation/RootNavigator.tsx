import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import UserProfile from '../screens/UserProfile/UserProfile'
import {ThemeProvider, useTheme} from "../context/ThemeContext.tsx"

export type RootStackParamList = {
  Home: undefined
  UserProfile: {
    name: string
    email: string
    phone: string
    website: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            color: theme.colors.text,
          },
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Список пользователей' }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ title: 'Профиль пользователя' }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  )
}