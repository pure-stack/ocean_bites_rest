import {Modal, View} from 'react-native'
import React from 'react'
import PageWithHeader from '@/components/PageWithHeader'
import Text from '@/components/ui/Text'
import {Colors} from '@/constants/Colors'

interface IInfoPointsProps {
    open: boolean;
    handleClose: () => void
}

const InfoPoints = (props: IInfoPointsProps) => {
    const {open, handleClose} = props

    return (
      <Modal visible={open} animationType="slide"
             presentationStyle="fullScreen">
          <View style={{
              backgroundColor: Colors.light.background
          }}>
              <PageWithHeader title={'navbar.points'} leftBtnText={'button.back'} onPressLeftBtn={handleClose}>
                  <Text
                    text={'points.pointsText'} numberOfLines={50} styles={{
                      marginTop: 40
                  }}/>
              </PageWithHeader>
          </View>

      </Modal>
    )
}

export default InfoPoints
