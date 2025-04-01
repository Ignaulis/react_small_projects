import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { moreInfo } from "../../api/api";

export default function ResultCard() {

    const { data, setInfoData, setOpen } = useContext(AppContext);

    if (!Array.isArray(data)) {
        return <span className="text-2xl text-white">No data</span>;
    }

    const handleMoreInfo = async (id) => {

        try {
            const res = await moreInfo(id)
            setInfoData(res)
            setOpen(e => !e)
        } catch (err) {
            console.log('No good', err);
        }
    }

    return (
        <div className="w-screen flex justify-center">
            <div className="flex gap-10 flex-wrap w-4/5 justify-center">
                {
                    data.map((i, k) => (
                        <div key={k} className="flex flex-col p-4 bg-gray-700 rounded-md w-64 text-white justify-between">
                            <div className="flex gap-2 justify-center mb-2 text-xl text-center">
                                <span>{i.Title} ({i.Year})</span>
                            </div>

                            <img className="w-60 rounded-md" src={i.Poster} alt="" />
                            <div className="flex justify-center mt-2">
                                <button
                                    className="bg-blue-600 p-2 cursor-pointer rounded-sm hover:opacity-90 text-white"
                                    onClick={() => handleMoreInfo(i.imdbID)}
                                >
                                    More Info
                                </button>
                            </div>


                        </div>


                    ))
                }
            </div>
        </div>

    );
}