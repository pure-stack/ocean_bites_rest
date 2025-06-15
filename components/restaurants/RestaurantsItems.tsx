import {View} from 'react-native'
import RestaurantItem from '@/components/restaurants/RestaurantItem'
import {Titles} from '@/constants/titles'
import {IExpenses} from '@/types/expenses'
import {SumFormattedCurrencies} from '@/utils/SumAmounts'
import {Colors} from '@/constants/Colors'

interface IRestaurantsItemsProps {
    items: any;
    expenses: IExpenses[]
}

const RestaurantsItems = (props: IRestaurantsItemsProps) => {
    const {items, expenses} = props

    return (
      <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.light.background
      }}>
          {Object.entries(items).map(([key, item]) => <RestaurantItem key={key} title={Titles[key]}
                                                                      spent={SumFormattedCurrencies(expenses.filter(expense => expense.subcategory === key).map(expense => expense.amount))}
                                                                      total={item as string}/>)}
      </View>
    )
}

export default RestaurantsItems
