import {IExpenseCategory} from '@/types/expenses'
import {TouchableOpacity, View} from 'react-native'
import Text from '@/components/ui/Text'
import Divider from '@/components/ui/Divider'
import React from 'react'
import CheckIcon from '../../../../build-track/assets/images/icons/CheckIcon'

interface ICategoryCardProps {
    category: IExpenseCategory
    onPress: (item: IExpenseCategory) => void;
    isSelected?: boolean;
    isLast?: boolean;
}

const CategoryCard = (props: ICategoryCardProps) => {
    const {category, onPress, isSelected = false, isLast = false} = props

    return (
      <TouchableOpacity
        onPress={() => onPress(category)}
        activeOpacity={0.7}
      >
          <View style={{
              paddingTop: 12,
              paddingBottom: isLast ? 12 : 0
          }}>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
              }}>
                  <Text text={category.name}/>
                  {isSelected && <CheckIcon />}
              </View>
              {!isLast && <Divider additionalStyles={{
                  marginTop: 12
              }}/>}
          </View>
      </TouchableOpacity>
    )
}

export default CategoryCard
