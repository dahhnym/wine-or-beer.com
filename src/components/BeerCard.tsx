import { Beer } from "../types/Beer";

interface BeerProps {
    beerData: Beer
}

export const BeerCard = ({ beerData }: BeerProps) => {
    const { name, price} = beerData;

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
        </div>
    )
}