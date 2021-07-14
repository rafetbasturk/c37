import { createContext, useContext, useEffect, useState } from "react";

const url = "https://restcountries.eu/rest/v2/all"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setIsLoading(true)
    try {
      const fetchCountries = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setCountries(data)
        setIsLoading(false)
      }
      fetchCountries()
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        countries
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }