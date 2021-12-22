import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeersData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beer";
import { ButtonBack } from "../../components/ButtonGoBack";

const StoutsPage: NextPage = () => {
    const name = 'stouts';
    const { data, error } = useBeersData(name);

    if(error) return <Error />
    if(!data) return <Loading />

  return (
    <div>
      <ButtonBack />
      <h1>Stout List</h1>
      <main>
            {data.map((beerData: Beer) => {
                return (
                    <BeerCard key={`stout-list-${beerData.id}`} beerData={beerData}/>
                )
            })}
      </main>
    </div>
  );
};

export default StoutsPage;