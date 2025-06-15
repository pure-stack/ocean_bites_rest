import React, {useState} from 'react'
import Text from '@/components/ui/Text'
import {IStaff} from '@/types/staff'
import StaffName from '@/components/staff/StaffName'
import {IPatient} from '@/types/patient'
import {FlatList, Modal, Pressable, StyleSheet, View} from 'react-native'
import ArrowIcon from '../../../../build-track/assets/images/icons/ArrowIcon'
import PageWithHeader from '@/components/ui/PageWithHeader'
import {IExpenseCategory} from '@/types/expenses'
import CategoryCard from '@/components/expenses/category/CategoryCard'

interface IChooseCategoryProps {
    value: IExpenseCategory;
    title: string;
    modalTitle: string;
    emptyText: string;
    handleChange: (value: IExpenseCategory) => void;
    data: IExpenseCategory[];
}

const ChooseCategory = (props: IChooseCategoryProps) => {
    const {value, title, modalTitle, emptyText, data, handleChange} = props
    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
        setOpenModal(prev => !prev)
    }

    const renderCard = ({item, index}: { item: IExpenseCategory, index: number }) => {
        const isLast = index === data.length - 1
        // @ts-ignore
        const isSelected = item.id === value.id
        return (
          <CategoryCard category={item} onPress={handleChange} isSelected={isSelected} isLast={isLast}/>
        )
    }

    const renderEmptyState = () => (
      <Text
        text={emptyText}
      />
    )

    const renderChosenData = () => {
        return <Text text={value.name}/>
    }

    return (
      <>
          <View style={styles.container}>
              <Text text={title}/>
              <Pressable style={styles.btnContainer} onPress={handleToggleModal}>
                  {value.id ? renderChosenData() : <Text text={'Choose'}/>}
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
                        contentContainerStyle={data.length < 1 ? styles.emptyContainer : styles.categoryContainer}
                      />
                  </PageWithHeader>
              </View>

          </Modal>
      </>
    )
}

export default ChooseCategory

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
    emptyContainer: {},
    categoryContainer: {
        marginTop: 24,
        paddingHorizontal: 16,
        backgroundColor: '#2B3040',
        borderRadius: 8
    }
})
