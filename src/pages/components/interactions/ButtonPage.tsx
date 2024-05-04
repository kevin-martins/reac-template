import Wrapper from "../../../components/Wrapper";
import CircleButton from "../../../components/buttons/CircleButton";
import CloseButton from "../../../components/buttons/CloseButton";
import RotatingBorderButton from "../../../components/buttons/RotatingBorderButton";
import RotatingGradientButton from "../../../components/buttons/RotatingGradientButton";
import ShadowButton from "../../../components/buttons/ShadowButton";
import SlideButton from "../../../components/buttons/SlideButton";
import SpotlightButton from "../../../components/buttons/SpotlightButton";
import VerticalFillButton from "../../../components/buttons/VerticalFillButton";


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
