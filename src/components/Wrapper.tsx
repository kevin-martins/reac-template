type Props = {
  title: string
  children: JSX.Element
  padding?: boolean
};

const Wrapper = ({ title, children, padding = true }: Props) => (
  <div className="py-4">
    <h2 className="text-xl mb-1">{title}</h2>
    <div className={`bg-white min-h-[250px] flex items-center justify-center border border-black ${padding ? 'py-10' : ''}`}>
      {children}
    </div>
  </div>
);

export default Wrapper;
