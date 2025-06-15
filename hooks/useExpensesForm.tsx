import {useState} from 'react'
import {IExpenses} from '@/types/expenses'

const INITIAL_STATE: IExpenses = {
    id: 'null',
    restaurantId: '',
    name: '',
    restaurant: '',
    amount: '',
    category: '',
    subcategory: '',
    date: new Date().toString(),
    time: new Date().toString()
}

export const useExpensesForm = (initState?: IExpenses) => {
    const [data, setData] = useState<IExpenses>(initState ? initState : INITIAL_STATE)

    const checkErrors = () => {
        return !Object.values(data).every(item => item.length > 1)
    }

    const handleChange = (value: string, field: string) => {
        setData(prev => ({...prev, [field]: value}))
    }

    const clearForm = () => setData(INITIAL_STATE)

    return {data, handleChange, checkErrors, clearForm}
}
