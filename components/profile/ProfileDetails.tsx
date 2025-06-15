import {ScrollView} from 'react-native'
import TextInputWithTitle from '@/components/ui/Inputs/TextInputWithTitle'
import DatePickerCustom from '@/components/ui/DatePickerCustom'
import {IProfile} from '@/types/profile'
import React from 'react'

interface IProfileDetailsProps {
    data: IProfile;
    handleChange: (value: string, field: string) => void;
}

const ProfileDetails = (props: IProfileDetailsProps) => {
    const {data, handleChange} = props


    return (
      <ScrollView contentContainerStyle={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
      }} style={{
          width: '100%',
          marginTop: 40
      }}>
          <TextInputWithTitle value={data.name} onChange={value => handleChange(value, 'name')} text={'field.name'}
                              placeholder={'placeholder.name'}/>
          <TextInputWithTitle value={data.phone} onChange={value => handleChange(value, 'phone')}
                              text={'field.phone'}
                              keyboardType={'number-pad'} placeholder={'placeholder.phone'}/>
          <DatePickerCustom selectedDate={data.dateOfBirth.toString()} placeholderText={''}
                            labelText={'field.birth'}
                            handleChange={value => handleChange(value, 'dateOfBirth')}/>
      </ScrollView>
    )
}

export default ProfileDetails
