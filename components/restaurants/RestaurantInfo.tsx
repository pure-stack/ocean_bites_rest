// import {StyleSheet, View} from 'react-native'
// import {IRestaurant} from '@/types/restaurants'
// import {LinearGradient} from 'expo-linear-gradient'
// import Text from '@/components/ui/Text'
// import {SumFormattedCurrencies} from '@/utils/SumAmounts'
// import {getAllSums} from '@/utils/GetAllSums'
// import {Colors} from '@/constants/Colors'
// import {textStyles} from '@/styles/text'
// import {Collapsible} from '@/components/Collapsible'
// import RestaurantsItems from '@/components/restaurants/RestaurantsItems'
// import ButtonCommon from '@/components/ui/Buttons/ButtonCommon'
// import {getAllExpensesForRestaurant, removeRestaurant} from '@/utils/AsyncStorage'
// import {usePromiseState} from '@/hooks/usePromiseState'
// import LoaderPage from '@/components/ui/LoaderPage'
// import {useEffect} from 'react'
// import {useIsFocused} from '@react-navigation/native'

// interface IRestaurantInfoProps {
//     restaurant: IRestaurant
//     isEdit: boolean;
//     refresh: () => void;
//     handleActiveRest: (rest: IRestaurant | null) => void;
// }

// const RestaurantInfo = (props: IRestaurantInfoProps) => {
//     const {restaurant, isEdit, refresh, handleActiveRest} = props
//     const isFocused = useIsFocused()
//     const {
//         data: expenses,
//         isLoading,
//         refresh: refreshExpInfo
//     } = usePromiseState(() => getAllExpensesForRestaurant(restaurant.id), [])

//     useEffect(() => {
//         if (isFocused) {
//             refreshExpInfo()
//         }
//     }, [isFocused])

//     if (isLoading) {
//         return;
//     }

//     const foodExpenses = expenses?.filter(expense => expense.category === 'food') || []
//     const staffExpenses = expenses?.filter(expense => expense.category === 'staff') || []
//     const rentExpenses = expenses?.filter(expense => expense.category === 'rent') || []

//     return (
//       <View key={restaurant.id} style={styles.container}>
//           <LinearGradient start={{x: 0, y: 0.5}}
//                           end={{x: 0.5, y: 0.5}} colors={[Colors.light.blue, Colors.light.icon]} style={{
//               borderRadius: 10
//           }}>
//               <View style={styles.header}>
//                   <View style={styles.headerText}>
//                       <Text text={restaurant.name} textColor={Colors.light.black} styles={{...textStyles.bold}}/>
//                       <Text text={restaurant.description} textColor={Colors.light.black}
//                             styles={{...textStyles.regular}}/>
//                   </View>
//                   <View style={styles.headerMoney}>
//                       <Text text={SumFormattedCurrencies(expenses?.map(expense => expense.amount) ?? [])}
//                             textColor={Colors.light.green} styles={textStyles.bold}/>
//                       <Text textColor={Colors.light.black}
//                             text={SumFormattedCurrencies(getAllSums(restaurant.food, restaurant.rent, restaurant.staff))}
//                             styles={textStyles.bold}/>
//                   </View>
//               </View>
//           </LinearGradient>
//           <Collapsible title={'category.food'}
//                        moneySpend={SumFormattedCurrencies(foodExpenses.map(expense => expense.amount))}
//                        total={SumFormattedCurrencies(getAllSums(restaurant.food))}>
//               <RestaurantsItems items={restaurant.food} expenses={foodExpenses}/>
//           </Collapsible>
//           <Collapsible title={'category.staff'}
//                        moneySpend={SumFormattedCurrencies(staffExpenses.map(expense => expense.amount))}
//                        total={SumFormattedCurrencies(getAllSums(undefined, undefined, restaurant.staff))}>
//               <RestaurantsItems items={restaurant.staff} expenses={staffExpenses}/>
//           </Collapsible>
//           <Collapsible title={'category.rent'}
//                        moneySpend={SumFormattedCurrencies(rentExpenses.map(expense => expense.amount))}
//                        total={SumFormattedCurrencies(getAllSums(undefined, restaurant.rent))} isLast={!isEdit}>
//               <RestaurantsItems items={restaurant.rent} expenses={rentExpenses}/>
//           </Collapsible>
//           {isEdit && <View style={styles.buttons}>
//               <ButtonCommon title={'button.delete'} bgColor={Colors.light.error}
//                             onPress={() => removeRestaurant(restaurant.id).then(() => refresh())}/>
//               <ButtonCommon title={'button.edit'} bgColor={Colors.light.blue} onPress={() => handleActiveRest(restaurant)}/>
//           </View>}
//       </View>
//     )
// }

// export default RestaurantInfo

// const styles = StyleSheet.create({
//     container: {
//         borderRadius: 10,
//         borderWidth: 1,
//         borderStyle: 'solid',
//         borderColor: Colors.light.icon
//     },
//     header: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(90deg, #01FFC2 0%, #42FF00 100%)',
//         gap: 8,
//         padding: 16
//     },
//     headerText: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 8,
//         maxWidth: '70%',
//     },
//     headerMoney: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         gap: 4,
//         maxWidth: '30%',
//         overflow: 'hidden'
//     },
//     buttons: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 10,
//         paddingHorizontal: 16,
//         paddingTop: 10,
//         paddingBottom: 16
//     }
// })

