export const API = ''

export const getStatistics = async () => {
    const res = await fetch(`${API}/get`, {
        method: 'GET'
    })
    return await res.json()
}

export const getIdeas = async () => {
    const res = await fetch(`${API}/get`, {
        method: 'GET'
    })
    return await res.json()
}

export const saveExpenses = async () => {
    const res = await fetch(`${API}/save`, {
        method: 'POST'
    })
    return await res.json()
}
