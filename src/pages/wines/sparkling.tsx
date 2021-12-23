import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { WineCardList } from "../../components/WineCardList";


const SparklingWinePage: NextPage = () => {
    const name = 'sparkling';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
    <div>
        <WineCardList name={name} />
    </div>
    );
};

export default SparklingWinePage;
