import DatePickerCustom from '@/components/ui/DatePickerCustom'
import TextInputWithTitle from '@/components/ui/Inputs/TextInputWithTitle'
import { IReservation } from '@/types/reservation'
import React from 'react'
import { ScrollView, View } from 'react-native'

interface IReservationDetailsProps {
    data: IReservation;
    handleChange: (value: any, field: string) => void;
    isEdit?: boolean;
}

const ReservationDetails = (props: IReservationDetailsProps) => {
    const {data, handleChange, isEdit = false} = props

    return (
      <ScrollView contentContainerStyle={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
      }} style={{
          width: '100%',
          marginTop: 40
      }}>
          <TextInputWithTitle 
            editable={isEdit} 
            value={data.name} 
            onChange={value => handleChange(value, 'name')} 
            text={'field.name'}
            placeholder={'placeholder.enterName'}
          />
          
          <TextInputWithTitle 
            editable={isEdit} 
            value={data.phone} 
            onChange={value => handleChange(value, 'phone')}
            text={'field.phone'}
            keyboardType={'phone-pad'} 
            placeholder={'placeholder.enterPhone'}
          />
          
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
          }}>
              <DatePickerCustom 
                editable={isEdit} 
                selectedDate={data.dateTocome.toString()} 
                placeholderText={''}
                labelText={'field.dateTocome'}
                handleChange={value => handleChange(value, 'dateTocome')}
                allowFutureDates={true}
              />
            
              <DatePickerCustom 
                editable={isEdit} 
                selectedDate={data.timeTocome.toString()} 
                placeholderText={''}
                labelText={'field.timeTocome'}
                handleChange={value => handleChange(value, 'timeTocome')}
                mode={'time'}
              />
          </View>
          
          <TextInputWithTitle 
            editable={isEdit} 
            value={data.guests.toString()}
            onChange={value => handleChange(value, 'guests')}
            text={'field.guests'}
            keyboardType={'number-pad'}
            placeholder={'placeholder.guestsCount'}
          />
          
          <TextInputWithTitle 
            editable={isEdit} 
            value={data.specialRequest} 
            onChange={value => handleChange(value, 'specialRequest')}
            text={'field.specialRequest'}
            placeholder={'placeholder.specialRequest'}
          />
      </ScrollView>
    )
}

export default ReservationDetails 