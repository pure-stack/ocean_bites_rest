// import {IExpense} from '@/types/expenses'
// import {useState} from 'react'
// import {removeItem} from '@/utils/AsyncStorage'
// import {EXPENSES} from '@/constants/localstorage'
// import {Pressable, StyleSheet, View} from 'react-native'
// import Text from '@/components/ui/Text'
// import {formatDate} from '@/utils/formatDate'
// import EditDeleteBlock from '@/components/ui/Buttons/EditDeleteBlock'
// import Divider from '@/components/ui/Divider'

// interface IExpenseCardProps {
//     item: IExpense;
//     isLast: boolean;
//     onEdit: (item: IExpense) => void;
//     refresh: () => void;
// }

// const ExpenseCard = (props: IExpenseCardProps) => {
//     const {item, isLast, onEdit, refresh} = props

//     const [isSelected, setIsSelected] = useState({} as IExpense)

//     const handleSelectItem = (expense: IExpense) => {
//         setIsSelected(prev => prev.id ? {} as IExpense : expense)
//     }

//     const handleDeleteItem = async () => {
//         try {
//             await removeItem(EXPENSES, item.id, refresh)
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return (
//       <Pressable onPress={() => handleSelectItem(item)}>
//           <View style={{...styles.marginTop}}>
//               <View style={{...styles.container}}>
//                   <View style={styles.leftContainer}>
//                       <Text text={item.amount} type={'bold'}/>
//                       <Text text={formatDate(item.date.toString(), 'date-only')} type={'subtitle'}/>
//                   </View>
//                   <View style={styles.rightContainer}>
//                       <Text text={item.name} type={'bold'}/>
//                       <Text text={item.category.name} type={'subtitle'}/>
//                   </View>
//                   {isSelected.id && <EditDeleteBlock
//                       onEdit={() => onEdit(item)}
//                       onDelete={handleDeleteItem}/>}
//               </View>

//               {!isLast && <Divider additionalStyles={styles.marginTop}/>}
//           </View>
//       </Pressable>
//     )
// }

// export default ExpenseCard

// const styles = StyleSheet.create({
//     container: {
//         height: 48,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flex: 1,
//         gap: 10
//     },
//     leftContainer: {
//         maxWidth: 100,
//         gap: 8,
//         flexShrink: 0
//     },
//     rightContainer: {
//         flex: 1,
//         flexWrap: 'nowrap',
//         gap: 8,
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         justifyContent: 'center'
//     },
//     emptyContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingVertical: 60
//     },
//     emptyText: {
//         textAlign: 'center',
//         color: '#8F9BB3',
//         fontSize: 16,
//         lineHeight: 24
//     },
//     emptyList: {
//         flexGrow: 1
//     },
//     listContent: {
//         paddingTop: 16
//     },
//     textContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         gap: 4,
//         minWidth: 0
//     },
//     marginTop: {
//         gap: 16,
//     }
// })
