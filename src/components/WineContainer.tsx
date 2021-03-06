import styled from '@emotion/styled'
import { Error, Loading, WineCard } from ".";
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";
import { ButtonBack } from "../components/ButtonGoBack";

interface WineContainerProps {
    name: string
}

export const WineContainer = ({ name }: WineContainerProps) => {
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <ButtonBack />
            <WineTitle>{name} wine</WineTitle>
            <WineCardContainer>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard key={`${name}-wine-list-${wineData.id}`} wineData={wineData}/>
                    )
                })}
            </WineCardContainer>
        </div>
    )
}

const WineTitle = styled.h1`
    line-height: 180%;
    margin-left: 10px;
`

const WineCardContainer = styled.main`
    display: grid;
    gap: 0.2em;

    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(4, 1fr);
    }
`
