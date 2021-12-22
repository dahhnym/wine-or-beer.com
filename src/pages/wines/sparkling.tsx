import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";
import { ButtonBack } from "../../components/ButtonGoBack";


const SparklingWinePage: NextPage = () => {
    const name = 'sparkling';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <ButtonBack />
            <h1>Sparkling Wine List</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard key={`sparkling-wine-list-${wineData.id}`} wineData={wineData}/>
                    )
                })}
            </main>
        </div>
    );
};

export default SparklingWinePage;
