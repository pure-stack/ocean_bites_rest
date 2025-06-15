import PageWithHeader from '@/components/PageWithHeader'
import {ScrollView, View} from 'react-native'
import TextInput from '@/components/ui/TextInput'
import Button from '@/components/ui/Button'
import {IFood, IRent, IRestaurant, IStaff} from '@/types/restaurants'
import Text from '@/components/ui/Text'
import {SumFormattedCurrencies} from '@/utils/SumAmounts'
import {FOOD_CATEGORY, RENT_CATEGORY, STAFF_CATEGORY} from '@/constants/reustarantsFields'
import {useState} from 'react'
import {addRestaurant} from '@/utils/AsyncStorage'
import * as Crypto from 'expo-crypto'
import CategoryTitle from '@/components/ui/CategoryTitle'
import {ChangeCurrency} from '@/utils/ChangeCurrency'

interface ISecondStepProps {
    formData: IRestaurant;
    handleStep: (step: number) => void
    handleChange: (text: string, field: string) => void;
    checkErrors: () => boolean;
    clearForm: () => void;
    setRestaurant: any;
}

const SecondStep = (props: ISecondStepProps) => {
    const {formData, handleStep, handleChange, checkErrors, clearForm, setRestaurant} = props

    const [error, setError] = useState(false)

    const handleContinue = () => {
        if (checkErrors()) {
            setError(true)
            return
        }
        setError(false)
        const data = {...formData, id: Crypto.randomUUID()}
        setRestaurant((prev: IRestaurant[]) => {
            if (prev) {
                return [...prev, data]
            }
            return [data]
        })
        addRestaurant(data).then(() => {
            clearForm()
            handleStep(0)
        })
    }


    return (
      <ScrollView contentContainerStyle={{
          flexGrow: 1
      }}>
          <PageWithHeader onPressLeftBtn={() => handleStep(1)} title={'restaurants.addBudget'}
                          leftBtnText={'button.back'}>
              <View style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: 20,
                  paddingBottom: 20,
                  gap: 20
              }}>
                  <CategoryTitle title={FOOD_CATEGORY.title}
                                 amount={SumFormattedCurrencies([formData.food.meat, formData.food.fruits, formData.food.dairy, formData.food.beverages, formData.food.other])}/>
                  {FOOD_CATEGORY.inputs.map(({field, title}) => <TextInput key={title}
                                                                           value={formData.food[field as keyof IFood]}
                                                                           onChange={(value) => ChangeCurrency(value, `food.${field}`, handleChange)}
                                                                           text={title}
                                                                           keyboardType={'number-pad'}
                                                                           placeholder={'placeholder.amount'}
                                                                           inputMode={'decimal'}/>)}
                  <CategoryTitle title={STAFF_CATEGORY.title}
                                 amount={SumFormattedCurrencies([formData.staff.kitchen, formData.staff.front, formData.staff.mgmt, formData.staff.overtime, formData.staff.training])}/>
                  {STAFF_CATEGORY.inputs.map(({field, title}) => <TextInput key={title}
                                                                            value={formData.staff[field as keyof IStaff]}
                                                                            onChange={(value) => ChangeCurrency(value, `staff.${field}`, handleChange)}
                                                                            text={title}
                                                                            keyboardType={'number-pad'}
                                                                            placeholder={'placeholder.amount'}
                                                                            inputMode={'decimal'}/>)}
                  <CategoryTitle title={RENT_CATEGORY.title}
                                 amount={SumFormattedCurrencies([formData.rent.rent, formData.rent.utils, formData.rent.cleaning, formData.rent.waste, formData.rent.delivery])}/>
                  {RENT_CATEGORY.inputs.map(({field, title}) => <TextInput key={title}
                                                                           value={formData.rent[field as keyof IRent]}
                                                                           onChange={(value) => ChangeCurrency(value, `rent.${field}`, handleChange)}
                                                                           text={title}
                                                                           keyboardType={'number-pad'}
                                                                           placeholder={'placeholder.amount'}
                                                                           inputMode={'decimal'}/>)}
              </View>
              {error && <Text text={'error.empty'} textColor={'red'} styles={{
                  textAlign: 'center',
                  marginBottom: 10
              }}/>}
              <Button onPress={handleContinue} title={'button.continue'} style={{
                  marginTop: 'auto'
              }}/>
          </PageWithHeader>
      </ScrollView>
    )
}

export default SecondStep


