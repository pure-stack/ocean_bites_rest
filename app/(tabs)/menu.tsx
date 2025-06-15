import {StyleSheet} from 'react-native'
import {useEffect, useState} from 'react'
import {usePromiseState} from '@/hooks/usePromiseState'
import {getItem} from '@/utils/AsyncStorage'
import {EXPENSES} from '@/constants/localstorage'
import LoaderPage from '@/components/ui/LoaderPage'
import {IExpenses} from '@/types/expenses'
import {useIsFocused} from '@react-navigation/native'
import Text from '@/components/ui/Text'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function TabTwoScreen() {
    const [isEdit, setIsEdit] = useState(false)
    const [activeExpense, setActiveExpense] = useState<IExpenses | null>(null)
    const [openExpense, setOpenExpense] = useState<boolean>(false)
    const {
        data: expenses,
        isLoading,
        setData: setExpenses,
        refresh
    } = usePromiseState<IExpenses[]>(() => getItem(EXPENSES), [])

    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) {
            setActiveExpense(null)
            setOpenExpense(false)
        }
    }, [isFocused])

    const handleToggleEdit = () => {
        setIsEdit(prev => !prev)
    }

    const handleToggleExpense = () => {
        setOpenExpense(prev => !prev)
    }

    const handleActiveExpense = (expense: IExpenses) => {
        setActiveExpense(expense)
    }

    const handleCloseExpense = () => {
        setActiveExpense(null)
    }

    // AsyncStorage.clear()
    if (isLoading) {
        return <LoaderPage/>
    }

    // if (openExpense) {
    //     return <AddExpense handleClose={handleToggleExpense} setExpenses={setExpenses}/>
    // }
    //
    // if (activeExpense) {
    //     return <EditExpense expense={activeExpense} handleClose={handleCloseExpense} setExpenses={setExpenses}/>
    // }

    return (
      <>
          <Text text={'menu'}/>
          {/*{expenses?.length > 0 ? <ScrollView>*/}
          {/*      <PageWithHeader onPressRightBtn={handleToggleEdit} rightBtnText={isEdit ? 'Done' : 'Edit'}*/}
          {/*                      title={'Your expenses'}>*/}
          {/*          <View style={{*/}
          {/*              display: 'flex',*/}
          {/*              flexDirection: 'column',*/}
          {/*              paddingTop: 20,*/}
          {/*              gap: 30,*/}
          {/*              overflow: 'hidden'*/}
          {/*          }}>*/}
          {/*              {expenses.map(expense => <ExpenseItem key={expense.id} item={expense} allExpenses={expenses}*/}
          {/*                                                    isEdit={isEdit} setExpenses={setExpenses}*/}
          {/*                                                    handleActiveExpense={handleActiveExpense}/>)}*/}
          {/*          </View>*/}
          {/*          <Button onPress={handleToggleExpense} title={'Add an expense'} style={{*/}
          {/*              marginTop: 20*/}
          {/*          }}/>*/}
          {/*      </PageWithHeader>*/}
          {/*  </ScrollView> :*/}
          {/*  <EmptyExpenses onPress={handleToggleExpense}/>}*/}
      </>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute'
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8
    }
})
