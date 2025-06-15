import LogoIcon from '@/assets/images/logo.png'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {View} from 'react-native'
import {Colors} from '@/constants/Colors'
import {Image} from 'expo-image'

interface ILoaderPageProps {

}

const LoaderPage = (props: ILoaderPageProps) => {
    const {} = props
    const insets = useSafeAreaInsets()
    return (
      <View style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.light.background,
          paddingTop: insets.top
      }}>
          <View style={{
              overflow: 'hidden',
              borderRadius: 20
          }}>
              <Image source={LogoIcon} style={{width: 124, height: 124}}/>
          </View>
      </View>
    )
}

export default LoaderPage
