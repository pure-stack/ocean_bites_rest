import {ScrollView, View} from 'react-native'
import OceanPoints from '@/components/points/OceanPoints'
import React from 'react'
import InfoIcon from '@/assets/images/icons/InfoIcon'
import PageWithHeader from '@/components/PageWithHeader'
import InfoPoints from '@/components/points/InfoPoints'
import {OCEAN_REWARDS} from '@/constants/oceanRewards'
import ButtonCommon from '@/components/ui/Buttons/ButtonCommon'
import {Colors} from '@/constants/Colors'
import Text from '@/components/ui/Text'
import {Image} from 'expo-image'
import OceanIcon from '@/assets/images/ocean.png'
import {updatePoints} from '@/utils/AsyncStorage'
import {OCEAN_REWARDS_LS} from '@/constants/localstorage'
import {IOceanRewards} from '@/types/points'
import CameraViewComponent from '@/components/ui/CameraView'

interface IOceanRewardsProps {
    handleStep: (step: number) => void;
    open: boolean;
    handleToggleModal: () => void;
    data: IOceanRewards[];
    refresh: () => void;
}

const OceanRewards = (props: IOceanRewardsProps) => {
    const {open, handleStep, handleToggleModal, data, refresh} = props

    const [showCamera, setShowCamera] = React.useState(false)

    const handleRedeemPoints = async (points: number, field: string, action: string) => {
        if (action === 'button.redeem') {
            await updatePoints(OCEAN_REWARDS_LS, points, field, refresh)
            return
        }
        setShowCamera(true)
    }

    const handleGoBack = async () => {
        setShowCamera(false)
        await updatePoints(OCEAN_REWARDS_LS, 100, 'freeDessert', refresh)
    }

    if (showCamera) {
        return <CameraViewComponent handleGoBack={handleGoBack}/>
    }

    return (
      <>
          <PageWithHeader title={'navbar.points'} leftBtnText={'button.back'} onPressLeftBtn={() => handleStep(0)}
                          rightBtn={<InfoIcon onPress={handleToggleModal}/>}>
              <ScrollView>
                  <View style={{
                      marginLeft: 'auto',
                      marginTop: 10
                  }}>
                      <OceanPoints points={data[0]?.total ?? 0}/>
                  </View>
                  {OCEAN_REWARDS.map(reward => <View key={reward.id} style={{
                      borderRadius: 16,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                      backgroundColor: Colors.light.secondary,
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      marginTop: 20
                  }}>
                      <View style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          height: 44
                      }}>
                          <Text text={reward.title} type={'title'}/>
                          <View style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 8
                          }}>
                              <Image source={OceanIcon} style={{width: 32, height: 32}}/>
                              <Text text={reward.points.toString()} type={'title'}/>

                          </View>
                      </View>
                      <ButtonCommon disabled={!!data[0]?.[reward.id as keyof IOceanRewards]} title={reward.action}
                                    bgColor={Colors.light.primary}
                                    onPress={() => handleRedeemPoints(reward.points, reward.id, reward.action)}/>
                  </View>)}
              </ScrollView>
          </PageWithHeader>
          <InfoPoints open={open} handleClose={handleToggleModal}/>
      </>
    )
}

export default OceanRewards
