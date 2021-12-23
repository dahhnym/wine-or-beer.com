import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { WineCardList } from "../../components/WineCardList";

const RedWinePage: NextPage = () => {
    const name = 'reds';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

  return (
    <div>
        <WineCardList name={name} />
    </div>
  );
};


export default RedWinePage;
