import type { NextPage } from "next";
import { WineContainer } from "../../components";

const WhiteWinePage: NextPage = () => {
  const name = 'whites';

  return (
    <div>
        <WineContainer name={name} />
    </div>
  );
};

export default WhiteWinePage;