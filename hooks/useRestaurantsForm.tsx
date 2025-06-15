import {useState} from 'react'
import {IRestaurant} from '@/types/restaurants'

const INITIAL_STATE: IRestaurant = {
    id: '',
    name: '',
    description: '',
    food: {
        dairy: '',
        beverages: '',
        fruits: '',
        meat: '',
        other: ''
    },
    staff: {
        front: '',
        kitchen: '',
        mgmt: '',
        overtime: '',
        training: ''
    },
    rent: {
        rent: '',
        utils: '',
        cleaning: '',
        waste: '',
        delivery: ''
    }
}

export const useRestaurantsForm = (rest?: IRestaurant) => {
    const [data, setData] = useState<IRestaurant>(rest ? rest : INITIAL_STATE)

    const checkErrors = () => {
        const isFoodHasEmpty = !Object.values(data.food).every(item => item.length > 1)
        const isStaffHasEmpty = !Object.values(data.staff).every(item => item.length > 1)
        const isRentHasEmpty = !Object.values(data.rent).every(item => item.length > 1)

        return isFoodHasEmpty || isStaffHasEmpty || isRentHasEmpty
    }

    const handleChange = (value: string, path: string) => {
        setData(prev => {
            const pathParts = path.split('.')
            const newState = {...prev}

            let current: any = newState
            for (let i = 0; i < pathParts.length - 1; i++) {
                current = current[pathParts[i]]
            }
            current[pathParts[pathParts.length - 1]] = value

            return newState
        })
    }

    const clearForm = () => {
        setData({
            id: '',
            name: '',
            description: '',
            food: {
                dairy: '',
                beverages: '',
                fruits: '',
                meat: '',
                other: ''
            },
            staff: {
                front: '',
                kitchen: '',
                mgmt: '',
                overtime: '',
                training: ''
            },
            rent: {
                rent: '',
                utils: '',
                cleaning: '',
                waste: '',
                delivery: ''
            }
        })
    }
    return {data, handleChange, checkErrors, clearForm}
}
