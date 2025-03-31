import { useContext, useState } from "react";
import AppContext from "../context/ContextProvider";

export default function Tasks({ taskListIndex }) {

    const { create, setCreate, setAddNewTask } = useContext(AppContext);
    const taskList = create[taskListIndex]

    const [checked, setChecked] = useState({});

    const handleChecked = (index) => {

        setChecked(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const handleOpenAddTask = (index) => {
        setAddNewTask(prev => ({
            ...prev,
            [index]: !prev[index]})
        )
    }

    const handleDelete = (index) => {
        const updatedList = [...create]
        updatedList[taskListIndex].tasks = updatedList[taskListIndex].tasks.filter((_, i) => i !== index)
        setCreate(updatedList)
        localStorage.setItem('Tasks', JSON.stringify(updatedList))

    }


    return (
        <div className="flex flex-col">

            <div className="border p-6 rounded-2xl bg-slate-800 flex flex-col">
                {taskList.tasks.length > 0
                    ? (
                        taskList.tasks.map((t, k) => (
                            <div key={k} className="flex justify-between gap-2 mb-2">
                                <input type="checkbox" onChange={() => handleChecked(k)} htmlFor="task" />
                                <span
                                    className={checked[k] ? 'text-white text-xl line-through' : 'text-white text-xl'}
                                    id="task"
                                >{t}</span>
                                <button
                                    className="bg-red-600 rounded-md uppercase font-normal text-sm pl-1 pr-1 text-white cursor-pointer"
                                    onClick={() => handleDelete(k)}
                                >delete</button>
                            </div>

                        )))
                    :
                    (<p className="text-white">No tasks</p>)
                }
            </div>
            <button className="text-white p-1 rounded-sm mt-1 cursor-pointer bg-blue-600" onClick={() => handleOpenAddTask(taskListIndex)}>Add Task</button>
        </div>
    );
}