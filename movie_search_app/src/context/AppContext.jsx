import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [infoData, setInfoData] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <AppContext.Provider
            value={{
                data, 
                setData,
                infoData,
                setInfoData,
                open,
                setOpen
            }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;