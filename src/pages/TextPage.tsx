import Wrapper from '../components/Wrapper';
import SlideText, { Direction } from '../components/text/SlideText';
import FadingText from '../components/text/FadingText';
import GrowText from '../components/text/GrowText';
import FallChangeText from '../components/text/FallChangeText';
import HiddenText from '../components/text/HiddenText';

const TextPage = () => {
  return (
    <div>
      <Wrapper title='Slide to right'>
        <SlideText
          title="Étoiles et Molécules !"
          text="Dans un univers où les étoiles scintillent et où les atomes dansent, l'exploration scientifique nous ouvre les portes de la connaissance. De l'infiniment grand à l'infiniment petit, chaque découverte nous émerveille et nous pousse à repousser les frontières du savoir. Préparez-vous à embarquer pour un périple captivant à travers les mystères de l'univers et les secrets de la matière !"
          direction={Direction.Right}
        />
      </Wrapper>
      <Wrapper title='Fade'>
        <FadingText
          text="Imaginez-vous jongler avec les agrumes acidulés tout en exécutant des pas de danse enflammés sur un mince câble métallique. Cela ressemble à défier la gravité avec des fruits exotiques en harmonie avec des mélodies classiques qui vous transportent dans un monde de rythme et de mouvement !"
        />
      </Wrapper>
      <Wrapper title='Hidden' padding={false}>
        <HiddenText
          text="Imaginez-vous jongler avec les agrumes acidulés tout en exécutant des pas de danse enflammés sur un mince câble métallique. Cela ressemble à défier la gravité avec des fruits exotiques en harmonie avec des mélodies classiques qui vous transportent dans un monde de rythme et de mouvement !"
        />
      </Wrapper>
      <Wrapper title='Auto swap'>
        <FallChangeText />
      </Wrapper>
    </div>
  );
};

export default TextPage;
