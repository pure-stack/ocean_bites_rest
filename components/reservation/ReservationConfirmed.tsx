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
      <PageWithHeader title={'reservation.title'}>
          <View style={styles.container}>
              <Text text={'reservation.confirmed'} type={'h2'} styles={styles.title}/>
              
              <View style={styles.content}>
                  <Text text={`Thank you, ${reservation.name}!`} type={'reservation'} styles={styles.thankYouText}/>
                  
                  <View style={styles.bookingTextContainer}>
                      <Text 
                          text={'reservation.tableBooked'} 
                          type={'reservation'} 
                          styles={styles.bookingText}
                      />
                      <Text 
                          text={`for ${formatDateTime()}.`} 
                          type={'reservation'} 
                          styles={styles.bookingText}
                      />
                  </View>
                  
                  <View style={styles.welcomeTextContainer}>
                      <Text 
                          text={'reservation.welcomeGuests'} 
                          type={'reservation'} 
                          styles={styles.welcomeText}
                      />
                      <Text 
                          text={`(${reservation.guests} people) to Ocean Bites!`} 
                          type={'reservation'} 
                          styles={styles.welcomeText}
                      />
                  </View>
                  
                  <View style={styles.noteSection}>
                      <Text text={'reservation.pleaseNote'} type={'reservation'} styles={styles.noteTitle}/>
                      
                      <View style={styles.bulletPoints}>
                          <Text text={'reservation.arriveEarly'} type={'reservation'} styles={styles.bulletText}/>
                          <Text text={'reservation.allergyAlert'} type={'reservation'} styles={styles.bulletText}/>
                      </View>
                  </View>
                  
                  <Text 
                      text={'reservation.seeYouSoon'} 
                      type={'reservation'} 
                      styles={styles.closingText}
                  />
              </View>
          </View>
          
          <View style={styles.buttonContainer}>
              <ButtonCommon 
                  title={'reservation.newBooking'} 
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
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 28,
        letterSpacing: 0.35
    },
    content: {
        flex: 1,
        maxHeight: 230,
    },
    thankYouText: {
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10
    },
    bookingTextContainer: {
        marginBottom: 15
    },
    bookingText: {
        fontSize: 16,
        lineHeight: 22
    },
    welcomeTextContainer: {
        marginBottom: 20
    },
    welcomeText: {
        fontSize: 16,
        lineHeight: 22
    },
    noteSection: {
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
        height: 50,
    }
})

export default ReservationConfirmed 