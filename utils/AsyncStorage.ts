import AsyncStorage from '@react-native-async-storage/async-storage'

export const addItem = async <T>(key: string, value: T, callback: () => void) => {
    try {
        const currentValue = await getItem(key)
        if (currentValue === null) {
            await setItem(key, [value])
        } else {
            await setItem(key, [...currentValue, value])
        }
        callback()
    } catch (error) {
        console.error('Error setting item:', error)
    }
}

// remove generic

export const removeItem = async <T extends { id: string }>(key: string, id: string, callback: () => void) => {
    try {
        const currentValue: T[] | null = await getItem(key)
        if (currentValue === null) return
        const filteredValues = currentValue.filter((item) => item.id !== id)
        await setItem(key, filteredValues)
        callback()
    } catch (error) {
        console.error('Error removing item:', error)
    }
}

// update generic

export const updateItem = async <T extends { id: string }>(key: string, value: T, callback: () => void) => {
    try {
        const currentValue = await getItem(key)
        if (currentValue === null) return
        const updatedItems = currentValue.map((item: T) =>
          item.id === value.id ? value : item
        )
        await setItem(key, updatedItems)
        callback()
    } catch (error) {
        console.error('Error removing item:', error)
    }
}

export const setItem = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error('Error setting item:', error)
    }
}

export const getItem = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value !== null ? JSON.parse(value) : null
    } catch (error) {
        console.error('Error getting item:', error)
        return null
    }
}
