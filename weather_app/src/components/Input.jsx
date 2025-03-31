import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { weatherApi } from "../api";

export default function Input() {

    const { setCity, city, setData } = useContext(AppContext)

    const handleCity = async () => {

        if(city === ''){
            return;
        }
        const weatherData = await weatherApi(city);
        if(weatherData) {
            setData(weatherData)
        }

        
    }

    return (
        <div className="w-full p-4 flex justify-center gap-6">
            <input
                className="bg-amber-50 outline-0 p-1.5 rounded-sm border-0"
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                className="p-1.5 bg-cyan-600 border-0 rounded-sm text-white cursor-pointer hover:bg-cyan-500"
                onClick={handleCity}
            >
                Search
            </button>
        </div>
    );
}