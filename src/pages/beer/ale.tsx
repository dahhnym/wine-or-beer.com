import type { NextPage } from "next";
import { ButtonBack } from "../../components/ButtonGoBack";
import { BeerContainer } from "../../components/";


const AlePage: NextPage = () => {
    const name = 'ale';

  return (
    <div>
      <ButtonBack />
      <h1>{name} List</h1>
      <BeerContainer name={name} />
    </div>
  );
};

export default AlePage;