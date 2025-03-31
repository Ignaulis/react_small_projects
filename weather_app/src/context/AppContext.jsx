import { createContext, useEffect, useState } from "react";
import { weatherApi } from "../api";


export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [city, setCity] = useState('kaunas');
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const firstData = await weatherApi(city)
                setData(firstData)
            } catch (error) {
                console.log('Error', error);
            }
        }
        fetchData()

    },[city])

    return(
        <AppContext.Provider
            value={{
                city,
                setCity,
                data, 
                setData
            }}>
                {children}
            </AppContext.Provider>
    );
}

export default AppContext;