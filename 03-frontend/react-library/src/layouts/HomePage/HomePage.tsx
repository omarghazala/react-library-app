import React from "react";
import Carousel from "./components/Carousel";
import ExploreTopBooks from "./components/ExploreTopBooks";
import Heroes from "./components/Heroes";
import LibraryServices from "./components/LibraryServices";

const HomePage = () => {
    return (
        <>
            <ExploreTopBooks></ExploreTopBooks>
            <Carousel></Carousel>
            <Heroes></Heroes>
            <LibraryServices></LibraryServices>
        </>
    )
}

export default HomePage;