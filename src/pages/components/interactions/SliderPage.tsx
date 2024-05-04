import ImageSlider from '../../../components/user-interactions/ImageSlider';

type Props = {
  title: string
  children: JSX.Element
};

const Wrapper = ({ title, children }: Props) => (
  <div className="py-2">
    <h2 className="text-xl">{title}</h2>
    <div className="bg-white h-[500px] overflow-hidden border border-slate-300">
      {children}
    </div>
  </div>
);

const SliderPage = () => {
  return (
    <div>
      <Wrapper title='Slider'>
        <ImageSlider />
      </Wrapper>
    </div>
  );
};

export default SliderPage;
