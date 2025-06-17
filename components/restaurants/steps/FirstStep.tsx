// import {View} from 'react-native'
// import TextInput from '@/components/ui/TextInput'
// import Button from '@/components/ui/Button'
// import PageWithHeader from '@/components/PageWithHeader'
// import {IRestaurant} from '@/types/restaurants'
// import {useState} from 'react'
// import Text from '@/components/ui/Text'

// interface IFirstStepProps {
//     formData: IRestaurant;
//     handleStep: (step: number) => void
//     handleChange: (text: string, field: string) => void;
//     clearForm: () => void;
// }

// const FirstStep = (props: IFirstStepProps) => {
//     const {formData, handleStep, handleChange, clearForm} = props

//     const [error, setError] = useState(false)

//     const handleContinue = () => {
//         if (formData.name.length === 0 || formData.description.length === 0) {
//             setError(true)
//             return
//         }
//         setError(false)
//         handleStep(2)
//     }

//     return (
//       <PageWithHeader onPressLeftBtn={() => {
//           clearForm()
//           handleStep(0)
//       }} title={'restaurants.addRest'}
//                       leftBtnText={'button.cancel'}>
//           <View style={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 20,
//               paddingTop: 20
//           }}>
//               <TextInput value={formData.name} onChange={(value) => handleChange(value, 'name')} text={'field.name'}
//                          placeholder={'placeholder.nameRest'}/>
//               <TextInput value={formData.description} onChange={(value) => handleChange(value, 'description')}
//                          text={'field.description'} placeholder={'placeholder.descriptionRest'}/>
//               {error && <Text text={'error.empty'} textColor={'red'} styles={{
//                   textAlign: 'center'
//               }}/>}
//           </View>
//           <Button onPress={handleContinue} title={'button.continue'} style={{
//               marginTop: 'auto'
//           }}/>
//       </PageWithHeader>
//     )
// }

// export default FirstStep
