import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import imdb from '../../assets/imdb-svgrepo-com.svg';
import rotten from '../../assets/Rotten-Tomato.svg';
import metric from '../../assets/Metacritic--Streamline-Simple-Icons.svg';

export default function Modal() {

    const { infoData, open, setOpen } = useContext(AppContext);

    if (!infoData) {
        return null;
    }
    console.log(infoData);


    return (

        <div className={open ? "w-max rounded-xl p-8 bg-gray-500 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-max transition-all duration-500 opacity-100" : "absolute transition-all duration-1000 opacity-0 -top-96 transform -translate-x-1/2 -translate-y-1/2"}>
            <div className="flex w-full h-full flex-col gap-4 flex-wrap justify-between">
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col justify-center items-center gap-2 bg-gray-400 p-2 rounded-xl pb-6">
                        <span className="text-xl font-bold">{infoData.Title} ({infoData.Year})</span>
                        <img className="w-56 rounded-xl" src={infoData.Poster} alt="" />
                    </div>
                    <div className="flex flex-col gap-4 bg-gray-400 p-2 rounded-xl">
                        <span className="font-bold text-xl">Actors: <span className="font-medium">{infoData.Actors}</span></span>
                        <span className="font-bold text-xl">Director: <span className="font-medium">{infoData.Director}</span></span>
                        <span className="font-bold text-xl">Writer: <span className="font-medium">{infoData.Writer}</span></span>
                        <span className="font-bold text-xl">Awards: <span className="font-medium">{infoData.Awards}</span></span>
                        <span className="font-bold text-xl">Genre: <span className="font-medium">{infoData.Genre}</span></span>
                        <span className="font-bold text-xl">Country: <span className="font-medium">{infoData.Country}</span></span>
                        <span className="font-bold text-xl">Runtime: <span className="font-medium">{infoData.Runtime}</span></span>
                        <div className="w-full bg-gray-400 p-2 flex flex-wrap items-center justify-around rounded-xl">
                            <div className="flex flex-col justify-between items-center">
                                <img className="w-10" src={imdb} alt="imdb" />
                                <span className="text-xl">{infoData.Ratings[0].Value}</span>
                            </div>
                            <div className="flex flex-col justify-between items-center">
                                <img className="w-10" src={rotten} alt="rotten tommates" />
                                <span className="text-xl">{infoData.Ratings[1].Value}</span>
                            </div>
                            <div className="flex flex-col justify-between items-center">
                                <img className="w-10" src={metric} alt="metricritics" />
                                <span className="text-xl">{infoData.Ratings[2].Value}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full flex justify-between items-end">
                    <div className="w-96 bg-gray-400 p-2 rounded-xl">
                        <span className="leading-8 text-xl">{infoData.Plot}</span>
                    </div>

                    <button
                        className="bg-red-600 p-2 rounded-md text-white cursor-pointer text-xl hover:opacity-80"
                        onClick={() => setOpen(e => !e)}>
                        Close</button>
                </div>
            </div>

        </div>
    );
}