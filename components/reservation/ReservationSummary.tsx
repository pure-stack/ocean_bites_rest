import PageWithHeader from '@/components/PageWithHeader'
import ButtonCommon from '@/components/ui/Buttons/ButtonCommon'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import { IReservation } from '@/types/reservation'
import { StyleSheet, View } from 'react-native'

interface IReservationSummaryProps {
    reservation: IReservation;
    onContinue: () => void;
}

const ReservationSummary = (props: IReservationSummaryProps) => {
    const {reservation, onContinue} = props

    const formatDateTime = () => {
        const date = new Date(reservation.dateTocome)
        
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        })
        
        return `${formattedDate} at ${reservation.timeTocome}`
    }

    return (
      <PageWithHeader title={'reservation.title'}>
          <View style={styles.container}>
              <Text text={'reservation.orderSummary'} type={'h2'} styles={styles.title}/>
              
              <View style={styles.summaryCard}>
                  <View style={styles.summaryRow}>
                      <Text text={'field.name'} type={'subtitle'} textColor={Colors.light.textDesc}/>
                      <Text text={reservation.name} type={'subtitle'} textColor={Colors.light.text}/>
                  </View>
                  
                  <View style={styles.summaryRow}>
                      <Text text={'field.phone'} type={'subtitle'} textColor={Colors.light.textDesc}/>
                      <Text text={reservation.phone} type={'subtitle'} textColor={Colors.light.text}/>
                  </View>
                  
                  <View style={styles.summaryRow}>
                      <Text text={'field.dateTime'} type={'subtitle'} textColor={Colors.light.textDesc}/>
                      <Text text={formatDateTime()} type={'subtitle'} textColor={Colors.light.text}/>
                  </View>
                  
                  <View style={[styles.summaryRow, !reservation.specialRequest && styles.lastRow]}>
                      <Text text={'field.guests'} type={'subtitle'} textColor={Colors.light.textDesc}/>
                      <Text text={reservation.guests.toString()} type={'subtitle'} textColor={Colors.light.text}/>
                  </View>
                  
                  {reservation.specialRequest && (
                      <View style={[styles.summaryRow, styles.lastRow]}>
                          <Text text={'field.specialRequest'} type={'subtitle'} textColor={Colors.light.textDesc}/>
                          <Text text={reservation.specialRequest} type={'subtitle'} textColor={Colors.light.text}/>
                      </View>
                  )}
              </View>
          </View>
          
          <View style={styles.buttonContainer}>
              <ButtonCommon 
                  title={'button.continue'} 
                  onPress={onContinue}
                  bgColor={Colors.light.primary}
              />
          </View>
      </PageWithHeader>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    title: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 28,
        letterSpacing: 0.35,
    },
    summaryCard: {
        backgroundColor: Colors.light.secondary,
        borderRadius: 12,
        paddingHorizontal: 20,
        maxHeight: 228,
        height: '100%',
        paddingTop: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff40',
        minHeight: 20,
        height: 40
    },
    lastRow: {
        borderBottomWidth: 0
    },
    buttonContainer: {
        height: 50,
    }
})

export default ReservationSummary 