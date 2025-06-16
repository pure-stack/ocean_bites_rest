import {View} from 'react-native'
import {Image} from 'expo-image'
import OceanIcon from '@/assets/images/ocean.png'
import Text from '@/components/ui/Text'
import {Colors} from '@/constants/Colors'
import React from 'react'


interface IPointsCounterProps {
    points: number;
}

const OceanPoints = (props: IPointsCounterProps) => {
    const {points} = props

    return (
      <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 16,
          borderColor: Colors.light.text,
          borderWidth: 1
      }}>
          <Image source={OceanIcon} style={{width: 40, height: 40}}/>
          {/*// @ts-ignore*/}
          <Text text={points.toString()} styles={{
              fontWeight: '700',
              fontSize: 20
          }}/>
      </View>
    )
}

export default OceanPoints
