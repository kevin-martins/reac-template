import Wrapper from "../Wrapper";
import CircleButton from "./CircleButton";
import CloseButton from "./CloseButton";
import RotatingBorderButton from "./RotatingBorderButton";
import RotatingGradientButton from "./RotatingGradientButton";
import ShadowButton from "./ShadowButton";
import SlideButton from "./SlideButton";
import SpotlightButton from "./SpotlightButton";
import VerticalFillButton from "./VerticalFillButton";


const ButtonPage = () => {
  const text = 'Please click me'
  return (
    <>
      <h1 className="text-3xl">Button Page</h1>
      <Wrapper title='Shadow'>
        <ShadowButton text={text} />
      </Wrapper>
      <Wrapper title='Rotating border'>
        <RotatingBorderButton text={text} />
      </Wrapper>
      <Wrapper title='Rotating gradient'>
        <RotatingGradientButton text={text} />
      </Wrapper>
      {/* <Wrapper title='Spotlight'>
        <SpotlightButton text={text} />
      </Wrapper> */}
      <Wrapper title='Slide'>
        <SlideButton text={text} />
      </Wrapper>
      <Wrapper title='Close'>
        <CloseButton text={text} />
      </Wrapper>
      <Wrapper title='Circle'>
        <CircleButton text={text} />
      </Wrapper>
      <Wrapper title='Circle'>
        <VerticalFillButton text={text} />
      </Wrapper>
    </>
  );
};

export default ButtonPage;
