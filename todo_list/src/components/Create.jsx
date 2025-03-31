import { useContext, useState } from "react";
import AppContext from "../context/ContextProvider";

export default function Create() {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const { setCreate, create } = useContext(AppContext)

    const handleCreate = () => {
        if (name === '' || date === '') {
            return
        }
        const newDate = date.split('T')[0]
        const updatedList = [
            ...create,
            {
                name,
                date: newDate,
                tasks: []
            }

        ]
        setCreate(updatedList)
        setName('')
        setDate('')
        localStorage.setItem('Tasks', JSON.stringify(updatedList))
    }


    return (
        <div className="p-4 flex flex-col gap-6 justify-center items-center border border-white rounded-2xl bg-slate-800">
            <label
                className="text-3xl text-white tracking-wider" htmlFor="task">
                New Task List
            </label>
            <input
                className=" p-2 bg-white rounded-xl outline-0"
                type="text"
                placeholder="Enter Task List Name"
                id="task"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input className=" p-2 bg-white rounded-xl outline-0" type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />

            <button
                className="text-white rounded p-4 text-xl cursor-pointer bg-green-600"
                onClick={handleCreate}
            >
                Enter
            </button>
        </div>
    );
}