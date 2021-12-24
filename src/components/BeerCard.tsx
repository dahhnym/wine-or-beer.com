import { Beer } from "../types/Beer";
import styled from '@emotion/styled'

interface BeerProps {
    beerData: Beer
}

export const BeerCard = ({ beerData }: BeerProps) => {
    const { name, price} = beerData;

    return (
        <Container>
            <Title>{name}</Title>
            <ItemList>
                <Item>Price</Item>
                <dd>{price}</dd>
            </ItemList>
        </Container>
    )
}

const Title = styled.h2`
    margin: 15px auto;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
`

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: solid 1px #f2f2f2;
    border-radius: 5px;
    margin: 5px;
`

const ItemList = styled.dl`
    display: flex;
    margin: 0 auto 20px;
`

const Item = styled.dt`
    font-weight: 600;
    margin-right: 8px;
`