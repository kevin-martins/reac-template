type Props = {
  title: string
  children: JSX.Element
};

const Wrapper = ({ title, children }: Props) => (
  <div className="py-2">
    <h2 className="text-xl">{title}</h2>
    <div className="bg-white min-h-[250px] flex items-center justify-center border border-black">
      {children}
    </div>
  </div>
);

export default Wrapper;
