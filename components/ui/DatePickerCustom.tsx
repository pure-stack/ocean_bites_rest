import Text from '@/components/ui/Text';
import { Colors } from '@/constants/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IDatePickerProps {
    selectedDate: string;
    placeholderText: string;
    labelText: string;
    mode?: 'date' | 'time' | 'datetime'
    display?: 'default' | 'compact' | 'inline' | 'spinner';
    handleChange: (text: string) => void;
    editable?: boolean;
    minimumDate?: Date;
    maximumDate?: Date;
    allowFutureDates?: boolean;
}

const DatePickerCustom = (props: IDatePickerProps) => {
    const {
        selectedDate, 
        mode = 'date', 
        placeholderText, 
        labelText, 
        display, 
        handleChange, 
        editable = true,
        minimumDate,
        maximumDate,
        allowFutureDates = false
    } = props


    return (
      <>
          <View style={styles.container}>
              <Text text={labelText}/>

              <DateTimePicker disabled={!editable} value={
                  (() => {
                      if (mode === 'time' && selectedDate) {
                          const today = new Date()
                          const timeMatch = selectedDate.match(/(\d{1,2}):(\d{2})/)
                          if (timeMatch) {
                              today.setHours(parseInt(timeMatch[1]), parseInt(timeMatch[2]), 0, 0)
                              return today
                          }
                      }
                      
                      if (selectedDate) {
                          const date = new Date(selectedDate)
                          if (isNaN(date.getTime())) {
                              console.warn(`⚠️ Invalid date: ${selectedDate}, using current date`)
                              return new Date()
                          }
                          return date
                      }
                      
                      return new Date()
                  })()
              } mode={mode} display={display}
                              style={styles.pickerContainer}
                              accentColor={Colors.light.placeholder}
                              onChange={(event, date) => {
                                  if (!date) {
                                      handleChange('')
                                      return
                                  }
                                  
                                  if (mode === 'time') {
                                      const timeString = date.toLocaleTimeString([], { 
                                          hour: '2-digit', 
                                          minute: '2-digit', 
                                          hour12: false 
                                      })
                                      handleChange(timeString)
                                  } else {
                                      handleChange(date.toString())
                                  }
                              }}
                              {...(mode === 'date' && (() => {
                                  const constraints: any = {}
                                  if (minimumDate) constraints.minimumDate = minimumDate
                                  if (maximumDate) constraints.maximumDate = maximumDate
                                  
                                  if (!minimumDate && !maximumDate) {
                                      if (allowFutureDates) {
                                          constraints.minimumDate = new Date()
                                      } else {
                                          constraints.maximumDate = new Date()
                                      }
                                  }
                                  
                                  return constraints
                              })())}/>
          </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    inputContainer: {
        borderRadius: 10,
        backgroundColor: Colors.light.background,
        padding: 12,
        overflow: 'hidden'
    },
    pickerContainer: {
        left: -10
    }
})

export default DatePickerCustom
