import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const DessertWinePage: NextPage = () => {
    const name = 'dessert';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <a href="./">Back</a>
            <h1>Dessert Wine List</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard key={`dessert-wine-list-${wineData.id}`} wineData={wineData}/>
                    )
                })}
            </main>
        </div>
    );
};

export default DessertWinePage;