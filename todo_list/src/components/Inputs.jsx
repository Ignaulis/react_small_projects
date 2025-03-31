import { useContext, useState } from "react";
import AppContext from "../context/ContextProvider";


export default function Inputs({ taskListIndex }) {

    const [task, setTask] = useState('');

    const { create, setCreate, addNewTask } = useContext(AppContext);
    const taskList = create[taskListIndex]

    const handleClick = () => {
        if (task === '') {
            return
        }
        const updatedList = [...create]
        updatedList[taskListIndex].tasks = [...taskList.tasks, task]

        setCreate(updatedList)
        localStorage.setItem('Tasks', JSON.stringify(updatedList))
        setTask('')


    }

    return (
        <div
            className={addNewTask[taskListIndex] ? 'border p-6 rounded-2xl bg-slate-800' : 'hidden'}>
            <div
                className="p-4 flex flex-col gap-6 justify-center items-center">
                <label
                    className="text-3xl text-white tracking-wider" htmlFor="task">
                    Enter New Task
                </label>
                <input
                    className=" p-2 bg-white rounded-xl outline-0"
                    type="text"
                    placeholder="Write your task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div
                className="p-4 flex justify-center">
                <button
                    className="text-white rounded p-4 text-xl cursor-pointer bg-green-600"
                    onClick={handleClick}
                >
                    Enter
                </button>
            </div>
        </div>
    );
}