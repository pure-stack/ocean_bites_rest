// import PageWithHeader from '@/components/ui/PageWithHeader'
// import {StyleSheet} from 'react-native'
// import React, {useState} from 'react'
// import {addItem, updateItem} from '@/utils/AsyncStorage'
// import {IExpense, IExpenseCategory} from '@/types/expenses'
// import Text from '@/components/ui/Text'
// import {EXPENSES, VISITS} from '@/constants/localstorage'
// import {getRandomId} from '@/utils/getRandomId'
// import {useExpenseForm} from '@/hooks/useExpenseForm'
// import StaffFieldsContainer from '@/components/staff/StaffFieldsContainer'
// import FixedTitleInput from '@/components/ui/Inputs/FIxedTitleInput'
// import Divider from '@/components/ui/Divider'
// import {ChangeCurrency} from '@/utils/ChangeCurrency'
// import ChooseItem from '@/components/ui/Choose/ChooseItem'
// import {EMPTY_TEXT} from '@/constants/emptyText'
// import ChooseDate from '@/components/ui/Choose/ChooseDate'
// import {Colors} from '@/constants/Colors'
// import {CATEGORIES} from '@/constants/categories'
// import ChooseCategory from '@/components/ui/Choose/ChooseCategory'

// interface IAddExpenseProps {
//     handleClose: () => void;
//     editExpense?: IExpense | null;
//     refresh: () => void;
// }

// const AddExpense = (props: IAddExpenseProps) => {
//     const {editExpense, refresh, handleClose} = props
//     const [error, setError] = useState(false)
//     const {data, handleChange, handleClearInput, isValid, clearForm} = useExpenseForm(editExpense || undefined)

//     const handleSave = async () => {
//         if (!isValid()) {
//             setError(true)
//             return
//         }

//         setError(false)

//         const {id, ...newDataRest} = data

//         try {
//             const addExpense = {
//                 id: getRandomId(),
//                 ...newDataRest
//             }
//             if (editExpense) {
//                 await updateItem(EXPENSES, {
//                     id: editExpense.id,
//                     ...newDataRest
//                 }, refresh)
//             } else {
//                 await addItem<IExpense>(EXPENSES, addExpense, refresh)
//             }
//         } catch (e) {
//             console.log(e)
//         }
//         clearForm()
//         handleClose()
//     }

//     return (
//       <PageWithHeader
//         onPressLeftBtn={handleClose}
//         leftBtnText={'Cancel'}
//         rightBtnText={'Save'}
//         onPressRightBtn={handleSave}
//         title={editExpense ? 'Edit expense' : 'Add an expense'}
//       >
//           <StaffFieldsContainer additionalStyles={{marginTop: 24}}>
//               <FixedTitleInput fieldTitle={'Name'} value={data.name} onChange={(value) => handleChange(value, 'name')}
//                                placeholder={'Enter here'} onBtnClick={() => handleClearInput('name')}/>
//               <Divider/>
//               <FixedTitleInput fieldTitle={'Amount'} value={data.amount} keyboardType={'number-pad'}
//                                onChange={(value) => ChangeCurrency(value, 'amount', handleChange)} placeholder={'$0'}
//                                onBtnClick={() => handleClearInput('amount')}/>
//               <Divider/>
//               <ChooseCategory value={data.category} title={'Category'}
//                                                         modalTitle={'Choose a category'}
//                                                         data={CATEGORIES}
//                                                         handleChange={(value) => handleChange(value, 'category')}
//                                                         emptyText={EMPTY_TEXT.staff}/>
//               <Divider/>
//               <ChooseDate value={data.date as string} handleChange={(value) => handleChange(value, 'date')}
//                           title={'Time and date'} modalTitle={'Time and Date'} datePickerProps={{
//                   mode: 'date',
//                   display: 'spinner'
//               }}/>
//           </StaffFieldsContainer>

//           {error && <Text text={'Fields cant be empty'} textColor={Colors.light.error}/>}
//       </PageWithHeader>
//     )
// }

// export default AddExpense

// const styles = StyleSheet.create({})
