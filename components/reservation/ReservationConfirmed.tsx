import PageWithHeader from '@/components/PageWithHeader'
import ButtonCommon from '@/components/ui/Buttons/ButtonCommon'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import { IReservation } from '@/types/reservation'
import { StyleSheet, View } from 'react-native'

interface IReservationConfirmedProps {
    reservation: IReservation;
    onNewBooking: () => void;
}

const ReservationConfirmed = (props: IReservationConfirmedProps) => {
    const {reservation, onNewBooking} = props

    const formatDateTime = () => {
        const date = new Date(reservation.dateTocome)
        
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        })
        
        return `${formattedDate} at ${reservation.timeTocome}`
    }

    return (
      <PageWithHeader title={'Reservation'}>
          <View style={styles.container}>
              <Text text={'Reservation confirmed!'} type={'h2'} styles={styles.title}/>
              
              <View style={styles.content}>
                  <Text text={`Thank you, ${reservation.name}!`} type={'default'} styles={styles.thankYouText}/>
                  
                  <Text 
                      text={`Your table has been successfully booked for ${formatDateTime()}.`} 
                      type={'default'} 
                      styles={styles.bookingText}
                  />
                  
                  <Text 
                      text={`We're excited to welcome you and your guests (${reservation.guests} people) to Ocean Bites!`} 
                      type={'default'} 
                      styles={styles.welcomeText}
                  />
                  
                  <View style={styles.noteSection}>
                      <Text text={'🗒️ Please note:'} type={'default'} styles={styles.noteTitle}/>
                      
                      <View style={styles.bulletPoints}>
                          <Text text={'• Arrive 10 minutes early to secure your table.'} type={'default'} styles={styles.bulletText}/>
                          <Text text={'• Allergy alert? Inform staff upon arrival.'} type={'default'} styles={styles.bulletText}/>
                      </View>
                  </View>
                  
                  <Text 
                      text={'See you soon for a fresh seafood experience! 🦞'} 
                      type={'default'} 
                      styles={styles.closingText}
                  />
              </View>
          </View>
          
          <View style={styles.buttonContainer}>
              <ButtonCommon 
                  title={'New booking'} 
                  onPress={onNewBooking}
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
        marginBottom: 40,
        fontSize: 28,
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        gap: 20
    },
    thankYouText: {
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10
    },
    bookingText: {
        fontSize: 16,
        lineHeight: 22
    },
    welcomeText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 20
    },
    noteSection: {
        marginTop: 10,
        marginBottom: 20
    },
    noteTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15
    },
    bulletPoints: {
        gap: 8,
        paddingLeft: 10
    },
    bulletText: {
        fontSize: 15,
        lineHeight: 20
    },
    closingText: {
        fontSize: 16,
        lineHeight: 22,
        marginTop: 10
    },
    buttonContainer: {
        marginTop: 'auto',
        paddingBottom: 40
    }
})

export default ReservationConfirmed 