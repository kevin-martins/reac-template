import Wrapper from "../components/Wrapper";
import CircleButton from "../components/button/CircleButton";
import CloseButton from "../components/button/CloseButton";
import GradientButton from "../components/button/GradientButton";
import SlideButton from "../components/button/SlideButton";
import SpotlightButton from "../components/button/SpotlightButton";

const ButtonPage = () => {
  const text = 'Please click me'
  return (
    <div>
      <h1 className="text-3xl">Button Page</h1>
      <Wrapper title='Gradient'>
        <GradientButton text={text} />
      </Wrapper>
      <Wrapper title='Spotlight'>
        <SpotlightButton text={text} />
      </Wrapper>
      <Wrapper title='Slide'>
        <SlideButton text={text} />
      </Wrapper>
      <Wrapper title='Close'>
        <CloseButton text={text} />
      </Wrapper>
      <Wrapper title='Circle'>
        <CircleButton text={text} />
      </Wrapper>
    </div>
  );
};

export default ButtonPage;
