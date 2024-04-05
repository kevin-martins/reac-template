import PopCard from "../components/cards/PopCard";

type Props = {
  title: string
  children: JSX.Element
};

const Wrapper = ({ title, children }: Props) => (
  <div className="py-2">
    <h2 className="text-xl">{title}</h2>
    <div className="bg-white h-[500px] overflow-y-auto items-center justify-center border border-slate-300">
      {children}
    </div>
  </div>
);

const CardPage = () => {
  return (
    <div>
      <Wrapper title="Popon">
        <PopCard />
      </Wrapper>
    </div>
  );
};

export default CardPage;
