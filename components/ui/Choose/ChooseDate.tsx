import {Modal, Pressable, StyleSheet, View} from 'react-native'
import Text from '@/components/ui/Text'
import ArrowIcon from '../../../../build-track/assets/images/icons/ArrowIcon'
import React, {useState} from 'react'
import PageWithHeader from '@/components/ui/PageWithHeader'
import DatePickerCustom from '@/components/ui/DatePickerCustom'
import {formatDate} from '@/utils/formatDate'

interface IChooseItemProps {
    value: string;
    handleChange: (value: string) => void;
    title: string;
    modalTitle: string;
    datePickerProps: {
        mode?: 'date' | 'time' | 'datetime'
        display?: 'default' | 'compact' | 'inline' | 'spinner';
    };
}

const ChooseDate = (props: IChooseItemProps) => {
    const {value, handleChange, title, modalTitle, datePickerProps: { mode, display}} = props
    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
        setOpenModal(prev => !prev)
        if (!value) {
            handleChange(new Date().toString())
        }
    }

    const renderChosenData = () => {
        return <Text text={mode === 'datetime' ? formatDate(value) : formatDate(value, 'date-only')}/>
    }

    return (
      <>
          <View style={styles.container}>
              <Text text={title}/>
              <Pressable style={styles.btnContainer} onPress={handleToggleModal}>
                  {value ? renderChosenData() : <Text text={'Choose'}/>}
                  <ArrowIcon/>
              </Pressable>
          </View>
          <Modal visible={openModal} animationType="slide"
                 presentationStyle="fullScreen">
              <View style={styles.modal}>
                  <PageWithHeader
                    leftBtnText={'< Back'}
                    onPressLeftBtn={handleToggleModal}
                    title={modalTitle}
                  >
                      <View style={styles.pickerContainer}>
                          <DatePickerCustom selectedDate={value.toString()} labelText={''} handleChange={handleChange} mode={mode} display={display}/>
                      </View>
                  </PageWithHeader>
              </View>

          </Modal>
      </>
    )
}

export default ChooseDate

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 44
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginLeft: 'auto'
    },
    modal: {
        flex: 1,
        backgroundColor: '#1C1F2D'
    },
    pickerContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 24
    }
})
