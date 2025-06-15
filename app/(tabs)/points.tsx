import {ScrollView, StyleSheet, View} from 'react-native'
import EmptyRestaurants from '@/components/restaurants/EmptyRestaurants'
import React, {useEffect, useState} from 'react'
import {getItem, setItem} from '@/utils/AsyncStorage'
import {IS_ONBOARDING_PASSED, RESTAURANTS} from '@/constants/localstorage'
import {usePromiseState} from '@/hooks/usePromiseState'
import {IRestaurant} from '@/types/restaurants'
import PageWithHeader from '@/components/PageWithHeader'
import {useRestaurantsForm} from '@/hooks/useRestaurantsForm'
import FirstStep from '@/components/restaurants/steps/FirstStep'
import SecondStep from '@/components/restaurants/steps/SecondStep'
import RestaurantInfo from '@/components/restaurants/RestaurantInfo'
import Button from '@/components/ui/Button'
import EditRestaurant from '@/components/restaurants/steps/EditRestaurant'
import {useIsFocused} from '@react-navigation/native'
import Text from '@/components/ui/Text'

export default function Points() {
    const [activeStep, setActiveStep] = useState<number>(0)
    const [isEdit, setIsEdit] = useState(false)
    const [activeRest, setActiveRest] = useState<IRestaurant | null>(null)

    const {data: formData, handleChange, checkErrors, clearForm} = useRestaurantsForm()

    const {data, setData: setRestaurant, isLoading, refresh} = usePromiseState<IRestaurant[]>(
      () => getItem(RESTAURANTS),
      []
    )

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setActiveStep(0)
        }
    }, [isFocused]);

    const handleActiveRest = (restaurant: IRestaurant | null) => {
        setActiveRest(restaurant)
    }

    const handleStep = (step: number) => {
        setActiveStep(step)
    }

    const handleToggleEdit = () => {
        setIsEdit(prev => !prev)
    }

    // if (activeRest) {
    //     return <EditRestaurant rest={activeRest} handleRest={handleActiveRest} />
    // }
    //
    //
    // if (activeStep === 1) {
    //     return <FirstStep formData={formData} handleStep={handleStep} handleChange={handleChange} clearForm={clearForm}/>
    // }
    //
    // if (activeStep === 2) {
    //     return <SecondStep formData={formData} handleStep={handleStep} handleChange={handleChange}
    //                        checkErrors={checkErrors} clearForm={clearForm} setRestaurant={setRestaurant}/>
    // }

    return (
      <>
          <Text text={'points'} />
          {/*{data?.length > 0 ? <ScrollView>*/}
          {/*      <PageWithHeader onPressRightBtn={handleToggleEdit} rightBtnText={isEdit ? 'button.done' : 'button.edit'}*/}
          {/*                      title={'restaurants.title'}>*/}
          {/*          <View style={{*/}
          {/*              display: 'flex',*/}
          {/*              flexDirection: 'column',*/}
          {/*              gap: 20,*/}
          {/*              paddingTop: 20*/}
          {/*          }}>*/}
          {/*              {data.map(restaurant => <RestaurantInfo key={restaurant.id} restaurant={restaurant}*/}
          {/*                                                      isEdit={isEdit} refresh={refresh} handleActiveRest={handleActiveRest}/>)}*/}
          {/*          </View>*/}
          {/*          <Button onPress={() => handleStep(1)} title={'restaurants.addRest'} style={{*/}
          {/*              marginTop: 20*/}
          {/*          }}/>*/}
          {/*      </PageWithHeader>*/}
          {/*  </ScrollView> :*/}
          {/*  <EmptyRestaurants onPress={() => handleStep(1)}/>}*/}
      </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute'
    }
})
