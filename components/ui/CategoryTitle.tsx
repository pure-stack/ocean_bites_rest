import {View} from 'react-native'
import Text from '@/components/ui/Text'
import {textStyles} from '@/styles/text'

interface ICategoryTitleProps {
    title: string;
    amount: string;
}

const CategoryTitle = (props: ICategoryTitleProps) => {
    const {title, amount} = props


    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <Text text={title} styles={textStyles.semibold}/>
        <Text text={amount} styles={{marginLeft: 'auto', color: 'rgba(255,255,255,0.8)'}}/>
    </View>

}

export default CategoryTitle
