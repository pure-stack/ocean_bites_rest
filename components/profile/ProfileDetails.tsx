import {ScrollView} from 'react-native'
import TextInputWithTitle from '@/components/ui/Inputs/TextInputWithTitle'
import DatePickerCustom from '@/components/ui/DatePickerCustom'
import {IProfile} from '@/types/profile'
import React from 'react'

interface IProfileDetailsProps {
    data: IProfile;
    handleChange: (value: string, field: string) => void;
    isEdit?: boolean;
}

const ProfileDetails = (props: IProfileDetailsProps) => {
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
          <TextInputWithTitle editable={isEdit} value={data.name} onChange={value => handleChange(value, 'name')} text={'field.name'}
                              placeholder={'placeholder.name'}/>
          <TextInputWithTitle editable={isEdit} value={data.phone} onChange={value => handleChange(value, 'phone')}
                              text={'field.phone'}
                              keyboardType={'number-pad'} placeholder={'placeholder.phone'}/>
          <DatePickerCustom editable={isEdit} selectedDate={data.dateOfBirth.toString()} placeholderText={''}
                            labelText={'field.birth'}
                            handleChange={value => handleChange(value, 'dateOfBirth')}/>
      </ScrollView>
    )
}

export default ProfileDetails
