import Wrapper from '../components/Wrapper';
import SlideText, { Direction } from '../components/text/SlideText';
import RevealText from '../components/text/RevealText';
import AutoSwapText from '../components/text/AutoSwapText';
import HiddenText from '../components/text/HiddenText';

const TextPage = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic expedita delectus fugit libero, neque facere quia officiis, perferendis quaerat fugiat amet harum ex cumque facilis porro maiores ipsum assumenda? Earum aliquid eum ipsa nostrum itaque porro id laborum reiciendis velit sint consectetur unde magni distinctio doloribus, facere dolores voluptate accusantium laudantium at, ratione iste voluptatum quo, ducimus esse. Animi!'
  return (
    <div>
      <Wrapper title='Slide to right'>
        <SlideText
          title="This is a title !"
          text={text}
        />
      </Wrapper>
      <Wrapper title='Reveal'>
        <RevealText
          text={text}
        />
      </Wrapper>
      <Wrapper title='Hidden' padding={false}>
        <HiddenText
          text={text}
        />
      </Wrapper>
      <Wrapper title='Auto swap'>
        <AutoSwapText />
      </Wrapper>
    </div>
  );
};

export default TextPage;
