import FromBothSide from "../components/cards/FromBothSide";
import PopCard from "../components/cards/PopCard";
import SkillCard from "../components/cards/SkillCard";
import TiltCard from "../components/cards/TiltCard";
import Wrapper from "../components/Wrapper";

type Props = {
  title: string
  children: JSX.Element
};

const CardWrapper = ({ title, children }: Props) => (
  <div className="py-2">
    <h2 className="text-xl">{title}</h2>
    <div className="bg-white h-[500px] overflow-y-scroll border border-black">
      {children}
    </div>
  </div>
);

const CardPage = () => {
  return (
    <div>
      <CardWrapper title="Popon">
        <PopCard />
      </CardWrapper>
      <Wrapper title="From both sides">
        <FromBothSide />
      </Wrapper>
      <Wrapper title="Hover tilt">
        <TiltCard />
      </Wrapper>
    </div>
  );
};

export default CardPage;
