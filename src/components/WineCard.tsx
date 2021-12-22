import { Wine } from "../types/Wine";
import styled from '@emotion/styled'

interface WineProps {
    wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
    const { wine, winery, image, rating } = wineData;

    return (
        <MainDiv>
            <Title>{wine}</Title>
            <Image src={image} alt="" />
            <p>Winery: {winery}</p>
            <p>Average Rate: {rating.average}</p>
        </MainDiv>
    )
}

const Title = styled.h2`
    margin: 10px auto;
    color: tomato;
    font-size: 20px;
`

const Image = styled.img`
    height: 300px;
    margin: 0 auto;
`

const MainDiv =styled.div`
    float: left;
    width: 400px;
    height: 480px;
    text-align: center;
    display: block;
    background-color: #f2f2f2;
    margin: 5px;
`

