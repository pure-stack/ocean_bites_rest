import {FlatList, Modal, Pressable, StyleSheet, View} from 'react-native'
import Text from '@/components/ui/Text'
import ArrowIcon from '../../../../build-track/assets/images/icons/ArrowIcon'
import React, {useState} from 'react'
import PageWithHeader from '@/components/ui/PageWithHeader'
import {IStaff} from '@/types/staff'
import ItemCard from '@/components/ui/ItemCard'
import StaffName from '@/components/staff/StaffName'
import {IPatient} from '@/types/patient'
import {IExpense} from '@/types/expenses'

interface IChooseItemProps<T> {
    value: T;
    title: string;
    modalTitle: string;
    emptyText: string;
    handleChange: (value: T) => void;
    data: T[];
}

const ChooseItem = <T, >(props: IChooseItemProps<T>) => {
    const {value, title, modalTitle, emptyText, data, handleChange} = props
    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
        setOpenModal(prev => !prev)
    }

    const renderCard = ({item, index}: { item: T, index: number }) => {
        // @ts-ignore
        const isSelected = item.id === value.id
        return (
          <ItemCard<T> item={item} onPress={() => handleChange(item)} isSelected={isSelected}/>
        )
    }

    const renderEmptyState = () => (
      <Text
        text={emptyText}
      />
    )

    const renderChosenData = () => {
        if ((value as IStaff).type) {
            return <StaffName staff={value as IStaff}/>
        }

        return <Text text={(value as IPatient).name}/>
    }

    return (
      <>
          <View style={styles.container}>
              <Text text={title}/>
              <Pressable style={styles.btnContainer} onPress={handleToggleModal}>
                  {(value as any).id ? renderChosenData() : <Text text={'Choose'}/>}
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
                      <FlatList
                        data={data}
                        renderItem={renderCard}
                        // @ts-ignore
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={renderEmptyState}
                        extraData={value}
                      />
                  </PageWithHeader>
              </View>

          </Modal>
      </>
    )
}

export default ChooseItem

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
    }
})
