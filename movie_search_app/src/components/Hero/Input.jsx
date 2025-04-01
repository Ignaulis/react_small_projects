import { useContext, useEffect, useState } from "react";
import { movieSearch } from "../../api/api";
import { AppContext } from "../../context/AppContext";
import logo from '../../../assets/logo.svg';

export default function Input() {

    const { setData } = useContext(AppContext);
    const [value, setValue] = useState('');

    useEffect(() => {

        if (value === '') {
            return
        }

        const fetchData = async () => {
            try {
                const searching = await movieSearch(value)
                setData(searching.Search)
            } catch (err) {
                console.log(err);
                setData([])
            }

        }
        fetchData()

    }, [value])

    const handleClick = async () => {
        try {
            const searchResult = await movieSearch(value);
            if (searchResult && searchResult.Search) {
                setData(searchResult.Search)
            } else {
                setData([])
            }
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }


    return (
        <div className="flex w-screen pb-6 mb-4 pt-4 bg-gray-900 px-10 flex-wrap gap-10 justify-between items-center">
            <div className="flex items-center justify-between w-96">
                <div className="w-18">
                <img src={logo} alt="" />
                </div>
                <span className="text-white text-5xl">Movie Time!</span>
            </div>
            <div className="flex gap-10 h-8">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-white p-2 text-xl rounded-sm outline-0"
                />
                <button
                    className="bg-blue-600 flex items-center p-2 cursor-pointer rounded-sm hover:opacity-90 text-white"
                    onClick={handleClick}
                >Search</button>
            </div>

        </div>
    );
}