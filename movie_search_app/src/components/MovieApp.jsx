import Hero from "./Hero/Hero";
import Modal from "./Modal";
import ResultCard from "./SearchResult/ResultCard";

export default function MovieApp() {

    return(
        <div className="">
            <Hero />
            <ResultCard />
            <Modal />
        </div>
    );
}