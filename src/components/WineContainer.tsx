import { Error, Loading, WineCard } from "../components";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";
import { ButtonBack } from "../components/ButtonGoBack";
import styled from '@emotion/styled'
import { MEDIA_QUERY_END_POINT } from "../constants";

interface WineCardListProps {
    name: string
}

export const WineCardList = ({ name }: WineCardListProps) => {
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
    )
}

const WineTitle = styled.h1`
    line-height: 180%;
    border-bottom: 1px solid black;    
`

const WineCardContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(4, 1fr);
    }
    

`