import { useContext } from "react";
import { weatherApi } from "../../api";
import AppContext from "../../context/AppContext";

export default function Buttons() {

    const {setData} = useContext(AppContext)

    const handleCity = async (city) => {

        const weatherData = await weatherApi(city)
        if(weatherData) {
            setData(weatherData)
        }
    }

    return(
        <div className="flex w-full justify-center mt-6 gap-6 flex-wrap">
            <button className="btn" onClick={() => handleCity('madrid')}>Madrid</button>
            <button className="btn" onClick={() => handleCity('sydney')}>Sydney</button>
            <button className="btn" onClick={() => handleCity('vilnius')}>Vilnius</button>
            <button className="btn" onClick={() => handleCity('london')}>London</button>
            <button className="btn" onClick={() => handleCity('la')}>Los Angels</button>
        </div>
    );
}