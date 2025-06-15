import DateTimePicker from '@react-native-community/datetimepicker'
import {StyleSheet, View} from 'react-native'
import Text from '@/components/ui/Text'
import {Colors} from '@/constants/Colors'

interface IDatePickerProps {
    selectedDate: string;
    placeholderText: string;
    labelText: string;
    mode?: 'date' | 'time' | 'datetime'
    display?: 'default' | 'compact' | 'inline' | 'spinner';
    handleChange: (text: string) => void;
}

const DatePickerCustom = (props: IDatePickerProps) => {
    const {selectedDate, mode = 'date', placeholderText, labelText, display, handleChange} = props


    return (
      <>
          <View style={styles.container}>
              <Text text={labelText}/>

              <DateTimePicker value={selectedDate ? new Date(selectedDate) : new Date()} mode={mode} display={display}
                              style={styles.pickerContainer}
                              accentColor={Colors.light.placeholder}
                              onChange={(event, date) => handleChange(date ? date.toString() : '')}
                              maximumDate={new Date()}/>
          </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
    },
    inputContainer: {
        borderRadius: 10,
        backgroundColor: Colors.light.background,
        padding: 12,
        overflow: 'hidden'
    },
    pickerContainer: {
        left: -24
    }
})

export default DatePickerCustom
