import {CATEGORIES, SUBCATEGORIES} from '@/constants/categories'
import i18n from 'i18next'

export const FOOD_CATEGORY = {
    title: `${i18n.t(CATEGORIES[0].title)} 🍎`,
    inputs: SUBCATEGORIES.food
}

export const STAFF_CATEGORY = {
    title: `${i18n.t(CATEGORIES[1].title)} 👨‍🍳`,
    inputs: SUBCATEGORIES.staff
}

export const RENT_CATEGORY = {
    title: `${i18n.t(CATEGORIES[2].title)} 🏢`,
    inputs: SUBCATEGORIES.rent
}
