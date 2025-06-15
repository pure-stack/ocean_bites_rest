import React, {ReactNode} from 'react'
import {Text} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

export interface IGradientText {
    colors: any;
    style?: any;
    children: ReactNode
}

const GradientText = ({
                          colors, style, children
                      }: IGradientText) => {
    return (
      <MaskedView maskElement={<Text style={style}>{children}</Text>}>
          <LinearGradient
            colors={colors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          >
              <Text style={[style, {opacity: 0}]}>{children}</Text>
          </LinearGradient>
      </MaskedView>
    )
}

export default GradientText
