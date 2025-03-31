import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function MainCard() {

    const { data } = useContext(AppContext)

    return (
        <div className="w-full flex justify-center mt-10 pt-6 pb-6">
            {
                data ?
                    (<div className="flex w-xl h-40 bg-white p-4 rounded-xl justify-between text-2xl mx-6">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <span>{data.location.name}, {data.location.country}</span>
                                <span>{data.location.localtime}</span>
                            </div>
                            <div>
                                <span className={data.current.temp_c > 30 ? 'text-red-500' : data.current.temp_c < 0 ? 'text-blue-500' : 'text-green-500'}>{data.current.temp_c} °C</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-24" src={data.current.condition.icon} alt="" />
                            <span>{data.current.condition.text}</span>
                        </div>
                    </div>)
                    :
                    (<div>No data</div>)

            }
        </div>
    );
}