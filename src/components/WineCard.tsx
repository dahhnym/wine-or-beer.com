import { Wine } from "../types/Wine";
import styled from '@emotion/styled'

interface WineProps {
    wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
    const { wine, winery, image, rating, location } = wineData;

    return (
        <Container>
            <Image src={image} alt="" />
            <Title>{wine}</Title>
            <ItemList>
                <Item>Winery</Item>
                <Desc>{winery}</Desc>
                <Item>Average Rate</Item>
                <Desc>{rating.average}</Desc>
                <Item>Location</Item>
                <Desc>{location}</Desc>
            </ItemList>
        </Container>
    )
}

const Title = styled.h2`
    margin: 0 auto 15px;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
`

const Image = styled.img`
    height: 300px;
    margin: 20px auto;
`

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: solid 1px #2F1640;
    border-radius: 5px;
    margin: 15px;
`

const ItemList = styled.dl`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 20px;
`

const Item = styled.dt`
    float: left;
    font-weight: 600;
`

const Desc = styled.dd`
    margin-bottom: 3px;
`

