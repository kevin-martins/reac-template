import GrowTitle from '../components/titles/GrowTitle';
import SlideTitle from '../components/titles/SlideTitle';
import Wrapper from '../components/Wrapper';

const TitlePage = () => {
  return (
    <div>
      <Wrapper title='Grow title'>
        <GrowTitle />
      </Wrapper>
      <Wrapper title='Slide title'>
        <SlideTitle />
      </Wrapper>
    </div>
  );
};

export default TitlePage;
