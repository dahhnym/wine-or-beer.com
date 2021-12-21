import { Wine } from "../types/Wine";

interface WineProps {
    wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
    const { wine, winery, image, rating } = wineData;

    return (
        <div>
            <h2>{wine}</h2>
            <img src={image} alt="" />
            <p>Winery: {winery}</p>
            <p>Average Rate: {rating.average}</p>
        </div>
    )
}