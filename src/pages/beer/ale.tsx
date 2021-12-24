import type { NextPage } from "next";
import { BeerContainer } from "../../components/";

const AlePage: NextPage = () => {
    const name = 'ale';

    return (
        <div>
            <BeerContainer name={name} />
        </div>
    );
};

export default AlePage;