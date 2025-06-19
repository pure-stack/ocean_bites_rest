import { Redirect, Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import MenuIcon from '@/assets/images/icons/MenuIcon'
import PointsIcon from '@/assets/images/icons/PointsIcon'
import ProfileIcon from '@/assets/images/icons/ProfileIcon'
import ReservationIcon from '@/assets/images/icons/ReservationIcon'
import { HapticTab } from '@/components/HapticTab'
import LoaderPage from '@/components/ui/LoaderPage'
import TabBarBackground from '@/components/ui/TabBarBackground'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import { IS_ONBOARDING_PASSED } from '@/constants/localstorage'
import { ROUTES } from '@/constants/routes'
import { usePromiseState } from '@/hooks/usePromiseState'
import { getItem } from '@/utils/AsyncStorage'

export default function TabLayout() {
    const {data, isLoading} = usePromiseState(() => getItem(IS_ONBOARDING_PASSED), [])

    if (isLoading) {
        return <LoaderPage/>
    }

    if (!data) {
        return <Redirect href={ROUTES.ONBOARDING}/>
    }

    return (
      <Tabs
        screenOptions={{
            tabBarActiveTintColor: Colors.light.primary,
            tabBarInactiveTintColor: Colors.light.third,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarStyle: Platform.select({
                ios: {
                    height: 100,
                    paddingTop: 16,
                    backgroundColor: Colors.light.black
                }
            }),
            tabBarIconStyle: {
                paddingBottom: 8
            }
        }}>
          <Tabs.Screen
            name="menu"
            options={{
                tabBarIcon: ({color}) => <MenuIcon color={color}/>,
                tabBarLabel: ({focused}) => <Text
                  textColor={focused ? Colors.light.primary : Colors.light.third}
                  text={'navbar.menu'}/>
            }}
          />
          <Tabs.Screen
            name="reservation"
            options={{
                tabBarLabel: ({focused}) => <Text
                  textColor={focused ? Colors.light.primary : Colors.light.third}
                  text={'navbar.reservation'}/>,
                tabBarIcon: ({color}) => <ReservationIcon color={color}/>
            }}
          />
          <Tabs.Screen
            name="points"
            options={{
                tabBarLabel: ({focused}) => <Text
                  textColor={focused ? Colors.light.primary : Colors.light.third}
                  text={'points.mainTitle'}
                  styles={{
                    width: 100,
                  }}/>,
                tabBarIcon: ({color}) => <PointsIcon color={color}/>
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
                tabBarIcon: ({color}) => <ProfileIcon color={color}/>,
                tabBarLabel: ({focused}) => <Text
                  textColor={focused ? Colors.light.primary : Colors.light.third}
                  text={'navbar.profile'}/>
            }}
          />
      </Tabs>
    )
}
