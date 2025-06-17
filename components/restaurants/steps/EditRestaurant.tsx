// import PageWithHeader from '@/components/PageWithHeader'
// import {ScrollView, View} from 'react-native'
// import TextInput from '@/components/ui/TextInput'
// import Button from '@/components/ui/Button'
// import CategoryTitle from '@/components/ui/CategoryTitle'
// import {FOOD_CATEGORY, RENT_CATEGORY, STAFF_CATEGORY} from '@/constants/reustarantsFields'
// import {SumFormattedCurrencies} from '@/utils/SumAmounts'
// import {IFood, IRent, IRestaurant, IStaff} from '@/types/restaurants'
// import {ChangeCurrency} from '@/utils/ChangeCurrency'
// import Text from '@/components/ui/Text'
// import React, {useState} from 'react'
// import {useRestaurantsForm} from '@/hooks/useRestaurantsForm'
// import {usePromiseState} from '@/hooks/usePromiseState'
// import {editRestaurant, getItem} from '@/utils/AsyncStorage'
// import {RESTAURANTS} from '@/constants/localstorage'

// interface IEditRestaurantProps {
//     rest: IRestaurant
//     handleRest: (rest: IRestaurant | null) => void
// }

// const EditRestaurant = (props: IEditRestaurantProps) => {
//     const {rest, handleRest} = props

//     const {data: formData, handleChange, checkErrors, clearForm} = useRestaurantsForm(rest)

//     const {data, setData: setRestaurant, isLoading, refresh} = usePromiseState<IRestaurant[]>(
//       () => getItem(RESTAURANTS),
//       []
//     )
//     const [error, setError] = useState(false)

//     const handleSave = () => {
//         if (checkErrors()) {
//             setError(true)
//             return
//         }
//         setError(false)
//         setRestaurant((prev: IRestaurant[]) => {
//             return prev.map((item: IRestaurant) =>
//               item.id === formData.id ? formData : item
//             )
//         })
//         editRestaurant(formData).then(() => {
//             handleRest(null)
//         })
//     }

//     return (
//       <ScrollView contentContainerStyle={{
//           flexGrow: 1
//       }}>
//           <PageWithHeader onPressLeftBtn={() => handleRest(null)} title={'restaurants.edit'}
//                           leftBtnText={'button.cancel'}>
//               <View style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: 20,
//                   paddingTop: 20
//               }}>
//                   <TextInput value={formData.name} onChange={(value) => handleChange(value, 'name')} text={'field.name'}
//                              placeholder={'placeholder.nameRest'}/>
//                   <TextInput value={formData.description} onChange={(value) => handleChange(value, 'description')}
//                              text={'field.description'} placeholder={'placeholder.descriptionRest'}/>


//                   <CategoryTitle title={FOOD_CATEGORY.title}
//                                  amount={SumFormattedCurrencies([formData.food.meat, formData.food.fruits, formData.food.dairy, formData.food.beverages, formData.food.other])}/>
//                   {FOOD_CATEGORY.inputs.map(({field, title}) => <TextInput key={title}
//                                                                            value={formData.food[field as keyof IFood]}
//                                                                            onChange={(value) => ChangeCurrency(value, `food.${field}`, handleChange)}
//                                                                            text={title}
//                                                                            keyboardType={'number-pad'}
//                                                                            placeholder={'placeholder.amount'}
//                                                                            inputMode={'decimal'}/>)}
//                   <CategoryTitle title={STAFF_CATEGORY.title}
//                                  amount={SumFormattedCurrencies([formData.staff.kitchen, formData.staff.front, formData.staff.mgmt, formData.staff.overtime, formData.staff.training])}/>
//                   {STAFF_CATEGORY.inputs.map(({field, title}) => <TextInput key={title}
//                                                                             value={formData.staff[field as keyof IStaff]}
//                                                                             onChange={(value) => ChangeCurrency(value, `staff.${field}`, handleChange)}
//                                                                             text={title}
//                                                                             keyboardType={'number-pad'}
//                                                                             placeholder={'placeholder.amount'}
//                                                                             inputMode={'decimal'}/>)}
//                   <CategoryTitle title={RENT_CATEGORY.title}
//                                  amount={SumFormattedCurrencies([formData.rent.rent, formData.rent.utils, formData.rent.cleaning, formData.rent.waste, formData.rent.delivery])}/>
//                   {RENT_CATEGORY.inputs.map(({field, title}) => <TextInput key={title}
//                                                                            value={formData.rent[field as keyof IRent]}
//                                                                            onChange={(value) => ChangeCurrency(value, `rent.${field}`, handleChange)}
//                                                                            text={title}
//                                                                            keyboardType={'number-pad'}
//                                                                            placeholder={'placeholder.amount'}
//                                                                            inputMode={'decimal'}/>)}
//               </View>
//               <View style={{
//                   width: '100%',
//                   marginTop: 'auto',
//                   paddingTop: 20
//               }}>
//                   {error && <Text text={'error.empty'} textColor={'red'} styles={{
//                       textAlign: 'center',
//                       marginBottom: 10
//                   }}/>}
//                   <Button onPress={handleSave} title={'button.save'}/>
//               </View>
//           </PageWithHeader>
//       </ScrollView>
//     )
// }

// export default EditRestaurant
