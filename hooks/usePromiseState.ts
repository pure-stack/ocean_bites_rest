import {useCallback, useState} from 'react'
import {useFocusEffect} from 'expo-router'

export function usePromiseState<T>(promiseFn: () => Promise<T>, initialValue: T) {
    const [state, setState] = useState<T>(initialValue)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useFocusEffect(
      useCallback(() => {
          let isMounted = true

          const fetchData = async () => {
              try {
                  setLoading(true)
                  const result = await promiseFn()
                  if (isMounted) {
                      setState(result)
                      setError(null)
                  }
              } catch (err) {
                  if (isMounted) {
                      setError(err as Error)
                  }
              } finally {
                  if (isMounted) {
                      setLoading(false)
                  }
              }
          }

          fetchData()

          return () => {
              isMounted = false
          }
      }, [])
    )

    return {
        data: state ?? [],
        setData: setState,
        isLoading: loading,
        isError: error,
        refresh: () => {
            setLoading(true)
            promiseFn()
              .then(result => {
                  setState(result)
                  setError(null)
              })
              .catch(err => setError(err))
              .finally(() => setLoading(false))
        }
    }
}
