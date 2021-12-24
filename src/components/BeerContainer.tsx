import styled from '@emotion/styled';
import { BeerCard, Error, Loading } from ".";
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useBeersData } from "../hooks/useBeersData";
import { Beer } from "../types/Beer";
import { ButtonBack } from "../components";

interface BeerContainerProps {
    name: string,
}

export const BeerContainer = ({name}: BeerContainerProps) => {
    const { data, error } = useBeersData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <ButtonBack />
            <BeerTitle>{name} list</BeerTitle>
            <BeerCardContainer>
                {data.map((beerData: Beer) => {
                    return (
                        <BeerCard key={`${name}-list-${beerData.id}`} beerData={beerData}/>
                    )
                })}
            </BeerCardContainer>
        </div>
    )


}

const BeerTitle = styled.h1`
    line-height: 180%;
    margin-left: 10px;
`

const BeerCardContainer = styled.main`
    display: grid;
    gap: 0.5em;

    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(4, 1fr);
    }
`