import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";
import { ButtonBack } from "../../components/ButtonGoBack";

const PortWinePage: NextPage = () => {
    const name = 'port';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <ButtonBack />
            <h1>Port Wine List</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard key={`port-wine-list-${wineData.id}`} wineData={wineData}/>
                    )
                })}
            </main>
        </div>
    );
};

export default PortWinePage;
