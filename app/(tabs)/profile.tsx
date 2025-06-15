import {Dimensions, Platform, StyleSheet} from 'react-native'
import PageWithHeader from '@/components/PageWithHeader'
import {LineChart} from 'react-native-chart-kit'
import {Colors} from '@/constants/Colors'
import {Defs, LinearGradient, Stop} from 'react-native-svg'
import {usePromiseState} from '@/hooks/usePromiseState'
import {IExpenses} from '@/types/expenses'
import {getItem, removeItem} from '@/utils/AsyncStorage'
import {EXPENSES, IS_ONBOARDING_PASSED} from '@/constants/localstorage'
import LoaderPage from '@/components/ui/LoaderPage'
import Text from '@/components/ui/Text'

const screenWidth = Dimensions.get('window').width

function formatDatesCustom(dates: string[]): string[] {
    let lastMonth = ''
    return dates?.map(dateStr => {
        const date = new Date(dateStr)
        const month = date.toLocaleString('default', {month: 'short'}).slice(0, 3)
        const day = date.getDate().toString().padStart(2, '0')

        if (month !== lastMonth) {
            lastMonth = month
            return `${month} ${day}`
        }
        return day
    })
}

const parseDateForReactNative = (dateString: string) => {
    if (Platform.OS === 'ios') {
        return new Date(dateString.replace(' GMT', ''))
    }
    return new Date(dateString)
}


export default function TabTwoScreen() {
    const {
        data: expenses,
        isLoading
    } = usePromiseState<IExpenses[]>(() => getItem(EXPENSES), [])

    const expensesByDate = expenses.sort((a, b) => {
        const dateA = parseDateForReactNative(a.date).getTime()
        const dateB = parseDateForReactNative(b.date).getTime()
        return dateA - dateB
    })

    const allAmounts = expensesByDate?.map(expense => expense.amount).map(str => parseFloat(str.replace(/[^0-9.-]/g, '')))

    const allLabels = formatDatesCustom(expensesByDate.map(exp => exp.date))
    const isEnough = allAmounts.length > 1

    const originalData = {
        labels: isEnough ? allLabels : [...allLabels, ...allLabels],
        datasets: [
            {
                data: isEnough ? allAmounts : [0, ...allAmounts],
            }
        ],
    }

    if (isLoading) {
        return <LoaderPage/>
    }

    return (
      <PageWithHeader title={'navbar.statistics'}>
         <Text text={'profile'} />
      </PageWithHeader>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute'
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8
    }
})
