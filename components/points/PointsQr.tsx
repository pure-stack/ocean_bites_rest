import Text from '@/components/ui/Text'
import PageWithHeader from '@/components/PageWithHeader'
import React from 'react'
import InfoIcon from '@/assets/images/icons/InfoIcon'
import InfoPoints from '@/components/points/InfoPoints'
import {Image} from 'expo-image'
import QrImage from '@/assets/images/qrcode.png'
import {ScrollView, View} from 'react-native'
import {Colors} from '@/constants/Colors'
import OceanPoints from '@/components/points/OceanPoints'
import {usePromiseState} from '@/hooks/usePromiseState'
import {getItem} from '@/utils/AsyncStorage'
import {OCEAN_REWARDS_LS} from '@/constants/localstorage'
import {IOceanRewards} from '@/types/points'

interface IPointsQrProps {
    handleStep: (step: number) => void
    open: boolean;
    handleToggleModal: () => void;
    data: IOceanRewards[];
}

const PointsQr = (props: IPointsQrProps) => {
    const {open, handleStep, handleToggleModal, data} = props
    return (
      <>
          <PageWithHeader title={'navbar.points'} leftBtnText={'button.back'} onPressLeftBtn={() => handleStep(0)}
                          rightBtn={<InfoIcon onPress={handleToggleModal}/>}>
              <ScrollView contentContainerStyle={{
                  height: '100%'
              }}>
                  <View style={{
                      marginLeft: 'auto',
                      marginTop: 10
                  }}>
                      <OceanPoints points={data[0]?.total ?? 0}/>
                  </View>
                  <View style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 'auto',
                      gap: 30
                  }}>
                      <Text
                        text={'points.qr'} textColor={Colors.light.textDesc} numberOfLines={50} styles={{
                          textAlign: 'center'
                      }}/>
                      <Image source={QrImage} style={{width: 320, height: 320}}/>
                  </View>
              </ScrollView>
          </PageWithHeader>
          <InfoPoints open={open} handleClose={handleToggleModal}/>
      </>
    )
}

export default PointsQr
