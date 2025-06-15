import {SafeAreaView} from 'react-native-safe-area-context'
import {View} from 'react-native'
import {Image} from 'expo-image'
import Text from '@/components/ui/Text'
import {containerStyles} from '@/styles/container'
import {textStyles} from '@/styles/text'
import Button from '@/components/ui/Button'

interface IEmptyRestaurantsProps {
    onPress: () => void;
}

const EmptyRestaurants = (props: IEmptyRestaurantsProps) => {
    const {onPress} = props

    return (
      <SafeAreaView
        style={{...containerStyles.flexCenterV, paddingHorizontal: 16}}>
          <Text text={'restaurants.title'} styles={textStyles.title}/>
          <View style={{paddingTop: 32}}>

              <View style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: 20
              }}>
                  <Text text={'restaurants.add'} styles={textStyles.h1}/>
                  <Text
                    numberOfLines={2}
                    text={'restaurants.setup'} styles={{textAlign: 'center'}}/>
              </View>
          </View>
          <Button title={'Add'} onPress={onPress} style={{
              marginTop: 'auto',
          }}/>
      </SafeAreaView>
    )
}

export default EmptyRestaurants
