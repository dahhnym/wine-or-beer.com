import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";
import { ButtonBack } from "../../components/ButtonGoBack";

const RoseWinePage: NextPage = () => {
    const name = 'rose';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

  return (
    <div>
      <ButtonBack />
      <h2>Rose Wine List</h2>
      <main>
        {data.map((wineData: Wine) => {
            return (
                <WineCard key={`rose-wine-list-${wineData.id}`} wineData={wineData}/>
            )
        })}
      </main>

    </div>
  );
};

export default RoseWinePage;