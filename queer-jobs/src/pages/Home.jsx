import MainContent from "../components/organisms/home/MainContent";
import InfoContent from "../components/organisms/home/InfoContent";
import PlansContent from "../components/organisms/home/PlansContent";
import NumbersContent from "../components/organisms/home/NumbersContent";
import Spacer from "../components/atoms/Spacer";

function Home() {
  return (
    <>
      <MainContent />
      <Spacer size={120} />
      <PlansContent />
      <Spacer size={120} />
      <NumbersContent />
      <Spacer size={120} />
      <InfoContent />
    </>
  );
};

export default Home