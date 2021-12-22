import { Beer } from "../types/Beer";
import styled from '@emotion/styled'

interface BeerProps {
    beerData: Beer
}

export const BeerCard = ({ beerData }: BeerProps) => {
    const { name, price} = beerData;

    return (
        <MainDiv>
            <Title>{name}</Title>
            <p>Price: {price}</p>
        </MainDiv>
    )
}

const Title = styled.h2`
    margin: 10px auto;
    color: tomato;
    font-size: 20px;
`

const MainDiv =styled.div`
    float: left;
    width: 400px;
    height: 200px;
    text-align: center;
    display: block;
    background-color: #f2f2f2;
    margin: 5px;
`