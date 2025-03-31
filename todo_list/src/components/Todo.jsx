import { useContext } from "react";
import Create from "./Create";
import Inputs from "./Inputs";
import Tasks from "./Tasks";
import AppContext from "../context/ContextProvider";

export default function Todo() {

    const { create, setCreate } = useContext(AppContext)

    const handleDelete = (index) => {
        const updatedList = create.filter((_, i) => i !== index)
        setCreate(updatedList)
        localStorage.setItem('Tasks', JSON.stringify(updatedList))

    }

    return (
        <div className="w-full h-screen flex flex-col pt-10 items-center">
            <h1 className="text-7xl tracking-wider font-bold text-white mb-20">Your To Do List</h1>
            <div className="flex gap-10 items-center flex-wrap">
                <div className="flex h-full items-start">
                    <Create />
                </div>
                <div className="flex flex-wrap overflow-scroll flex-col gap-10 max-h-screen max-w-3x1">
                    {
                        create.map((i, k) => (
                            <div key={k} className="flex flex-col bg-slate-900 p-6 rounded-2xl border-1 border-white items-center">
                                <div className="flex gap-10 items-center">
                                <h2 className="text-3xl mb-4 text-white tracking-wider">{i.name}</h2>
                                    <span className="text-white">{i.date}</span>
                                <button className="bg-red-600 w-max p-1 mb-2 text-white rounded-sm cursor-pointer"
                                    onClick={() => handleDelete(k)}>DELETE LIST</button>
                                    </div>
                                
                                <div className="flex gap-10 flex-wrap">
                                    <Inputs taskListIndex={k} />
                                    <Tasks taskListIndex={k} />
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
}