import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [create, setCreate] = useState([]);
    const [addNewTask, setAddNewTask] = useState(false);

    useEffect(() => {

        const taskai = JSON.parse(localStorage.getItem('Tasks')) || []
        if (taskai) {
            setCreate(taskai)
        }
    }, [])


    return (
        <AppContext.Provider
            value={{
                create,
                setCreate,
                addNewTask,
                setAddNewTask
            }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;