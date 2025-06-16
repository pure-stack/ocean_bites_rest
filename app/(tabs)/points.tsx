import {StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {getItem} from '@/utils/AsyncStorage'
import {OCEAN_REWARDS_LS} from '@/constants/localstorage'
import {usePromiseState} from '@/hooks/usePromiseState'
import PageWithHeader from '@/components/PageWithHeader'
import {useIsFocused} from '@react-navigation/native'
import Text from '@/components/ui/Text'
import {Image} from 'expo-image'
import OceanIcon from '@/assets/images/ocean.png'
import ButtonCommon from '@/components/ui/Buttons/ButtonCommon'
import {Colors} from '@/constants/Colors'
import InfoIcon from '@/assets/images/icons/InfoIcon'
import PointsQr from '@/components/points/PointsQr'
import InfoPoints from '@/components/points/InfoPoints'
import OceanRewards from '@/components/points/OceanRewards'
import {IOceanRewards} from '@/types/points'
import LoaderPage from '@/components/ui/LoaderPage'

export default function Points() {
    const [activeStep, setActiveStep] = useState<number>(0)
    const [openModal, setOpenModal] = useState(false)

    const {
        data,
        isLoading,
        refresh
    } = usePromiseState<IOceanRewards>(() => getItem(OCEAN_REWARDS_LS), {} as IOceanRewards)

    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) {
            setActiveStep(0)
        }
    }, [isFocused])

    const handleToggleModal = () => {
        setOpenModal(prev => !prev)
    }

    const handleStep = (step: number) => {
        setActiveStep(step)
    }

    if (activeStep === 1) {
        return <OceanRewards handleStep={handleStep} open={openModal} handleToggleModal={handleToggleModal}
                             data={data as IOceanRewards[]} refresh={refresh}/>
    }

    if (activeStep === 2) {
        return <PointsQr handleStep={handleStep} open={openModal} handleToggleModal={handleToggleModal}
                         data={data as IOceanRewards[]}/>
    }

    if (isLoading) {
        return <LoaderPage/>
    }

    return (
      <>
          <PageWithHeader title={'navbar.points'} rightBtn={<InfoIcon onPress={handleToggleModal}/>}>
              <View style={styles.content
              }>
                  <Image source={OceanIcon} style={{
                      width: 228,
                      height: 228
                  }}/>
                  <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6
                  }}>
                      <Text text={'points.title'} type={'h3'}/>
                      {/*// @ts-ignore*/}
                      <Text text={data[0]?.total.toString() ?? '0'} type={'title2'}/>
                      <Text text={'navbar.points'} type={'h3'}/>
                  </View>
              </View>

              <View style={styles.buttons}>
                  <ButtonCommon title={'button.redeem'} bgColor={Colors.light.primary} onPress={() => handleStep(1)}/>
                  <ButtonCommon title={'button.scanQr'} bgColor={Colors.light.primary} onPress={() => handleStep(2)}/>
              </View>
          </PageWithHeader>
          <InfoPoints open={openModal} handleClose={handleToggleModal}/>
      </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 'auto',
        gap: 36
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        height: 120,
        marginTop: 'auto'
    }
})
