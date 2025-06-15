export const formatSimplePhoneNumber = (value: string): string => {
    const numbers = value.replace(/[^\d]/g, '')

    const limitedNumbers = numbers.slice(0, 11)

    return limitedNumbers.length > 0 ? `+${limitedNumbers}` : ''
}

export const isValidPhoneNumber = (phone: string): boolean => {
    const numbers = phone.replace(/[^\d]/g, '')
    return numbers.length === 11
}

export const getPhoneValidationError = (phone: string): string | null => {
    const numbers = phone.replace(/[^\d]/g, '')

    if (numbers.length === 0) {
        return 'error.empty'
    } else if (numbers.length < 11) {
        return `error.phoneValid`
    }

    return null
}

export const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/[^\d]/g, '')

    if (numbers.length === 0) return ''
    if (numbers.length <= 1) return `+${numbers}`
    if (numbers.length <= 4) return `+${numbers.charAt(0)} (${numbers.slice(1)}`
    if (numbers.length <= 7) return `+${numbers.charAt(0)} (${numbers.slice(1, 4)}) ${numbers.slice(4)}`

    return `+${numbers.charAt(0)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 11)}`
}

export const formatDateOfBirth = (value: string): string => {
    const numbers = value.replace(/[^\d]/g, '')

    if (numbers.length === 0) return ''

    let month = numbers.slice(0, 2)
    let day = numbers.slice(2, 4)
    let year = numbers.slice(4, 8)

    if (month.length === 2) {
        const monthNum = parseInt(month)
        if (monthNum > 12) {
            month = '12'
        } else if (monthNum === 0) {
            month = '01'
        }
    }

    if (day.length === 2) {
        const dayNum = parseInt(day)
        if (dayNum > 31) {
            day = '31'
        } else if (dayNum === 0) {
            day = '01'
        }
    }

    if (year.length === 4) {
        const yearNum = parseInt(year)
        const currentYear = new Date().getFullYear()
        if (yearNum > currentYear) {
            year = currentYear.toString()
        } else if (yearNum < 1900) {
            year = '1900'
        }
    }

    const validatedNumbers = month + day + year

    if (validatedNumbers.length <= 2) return validatedNumbers
    if (validatedNumbers.length <= 4) return `${validatedNumbers.slice(0, 2)}/${validatedNumbers.slice(2)}`
    return `${validatedNumbers.slice(0, 2)}/${validatedNumbers.slice(2, 4)}/${validatedNumbers.slice(4)}`
}

export const displayDateOfBirth = (dateStr: string): string => {
    const numbers = dateStr.replace(/[^\d]/g, '')

    if (numbers.length !== 8) return dateStr

    const month = parseInt(numbers.slice(0, 2))
    const day = parseInt(numbers.slice(2, 4))
    const year = numbers.slice(4, 8)

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    if (month >= 1 && month <= 12) {
        return `${monthNames[month - 1]} ${day}, ${year}`
    }

    return dateStr
}

export const isValidDateOfBirth = (dateStr: string): boolean => {
    const numbers = dateStr.replace(/[^\d]/g, '')

    if (numbers.length !== 8) return false

    const month = parseInt(numbers.slice(0, 2))
    const day = parseInt(numbers.slice(2, 4))
    const year = parseInt(numbers.slice(4, 8))

    if (month < 1 || month > 12) return false
    if (day < 1 || day > 31) return false

    const currentYear = new Date().getFullYear()
    if (year < 1900 || year > currentYear) return false

    const daysInMonth = new Date(year, month, 0).getDate()
    if (day > daysInMonth) return false

    return true
}

export const getDateOfBirthValidationError = (dateStr: string): string | null => {
    const numbers = dateStr.replace(/[^\d]/g, '')

    if (numbers.length === 0) {
        return 'Date of birth is required'
    }

    if (numbers.length < 8) {
        return 'Please enter complete date (MM/DD/YYYY)'
    }

    if (!isValidDateOfBirth(dateStr)) {
        return 'Please enter a valid date'
    }

    return null
}
