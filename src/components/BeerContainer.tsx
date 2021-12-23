import { BeerCard, Error, Loading } from ".";
import { useBeersData } from "../hooks/useBeersData";
import { Beer } from "../types/Beer";

interface BeerContainerProps {
    name: string,
}

export const BeerContainer = ({name}: BeerContainerProps) => {
    const { data, error } = useBeersData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <main>
            {data.map((beerData: Beer) => {
                return (
                    <BeerCard key={`${name}-list-${beerData.id}`} beerData={beerData}/>
                )
            })}
        </main>
    )


}