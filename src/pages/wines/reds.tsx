import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";
import { ButtonBack } from "../../components/ButtonGoBack";

const RedWinePage: NextPage = () => {
    const name = 'reds';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

  return (
    <div>
      <ButtonBack />
      <h1>Red Wine List</h1>
        <main>
            {data.map((wineData: Wine) => {
                return (
                    <WineCard key={`red-wine-list-${wineData.id}`} wineData={wineData}/>
                )
            })}
        </main>
    </div>
  );
};


export default RedWinePage;
