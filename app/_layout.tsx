import {ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {Stack} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import 'react-native-reanimated'

import {useColorScheme} from '@/hooks/useColorScheme'
import i18nextConfig from '@/translations/i18nextConfig'
import {useEffect} from 'react'
import {getIdeas, getStatistics, saveExpenses} from '@/constants/api'


export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    })

    const init = async () => {
        i18nextConfig.initializeI18Next()
    }

    useEffect(() => {
        init()
        getStatistics()
        getIdeas()
        saveExpenses()
    }, [])

    if (!loaded) {
        // Async font loading only occurs in development.
        return null
    }

    const DarkTheme = {
        dark: true,
        colors: {
            primary: 'rgb(10, 132, 255)',
            background: 'rgb(31, 32, 36)',
            card: 'rgb(18, 18, 18)',
            text: 'rgb(229, 229, 231)',
            border: 'rgb(39, 39, 41)',
            notification: 'rgb(255, 69, 58)'
        },
        fonts: {
            regular: '', medium: '', bold: '', heavy: ''
        }
    }

    return (
      // @ts-ignore
      <ThemeProvider value={DarkTheme}>
          <Stack>
              <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
              <Stack.Screen name="onboarding" options={{headerShown: false}}/>
              <Stack.Screen name="+not-found"/>
          </Stack>
          <StatusBar style="auto"/>
      </ThemeProvider>
    )
}
