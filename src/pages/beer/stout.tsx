import type { NextPage } from "next";
import { BeerContainer } from "../../components";
import { ButtonBack } from "../../components/ButtonGoBack";

const StoutsPage: NextPage = () => {
    const name = 'stouts';

  return (
    <div>
      <ButtonBack />
      <h1>{name} List</h1>
      <BeerContainer name={name} />
    </div>
  );
};

export default StoutsPage;