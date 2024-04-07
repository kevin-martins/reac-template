import React from 'react'
import Wrapper from '../components/Wrapper';
import SlideText, { Direction } from '../components/text/SlideText';
import FadingText from '../components/text/FadingText';
import GrowText from '../components/text/GrowText';

// title, text, direction = Direction.UP

const TextPage = () => {
  return (
    <div>
      <Wrapper title='Slide text up'>
        <SlideText
          title="Le Pays des Merveilles !"
          text="Dans un monde où les licornes gambadent parmi les arcs-en-ciel et où les dragons gardent des trésors étincelants de gemmes, l'aventure vous attend à chaque coin de rue ! Ici, les rêves prennent vie et les possibilités sont infinies. Alors, saisissez votre imagination et rejoignez-nous dans un voyage plein de fantaisie à travers des forêts enchantées, des royaumes mystiques et au-delà !"
          direction={Direction.UP}
        />
      </Wrapper>
      <Wrapper title='Slide text right'>
        <SlideText
          title="Étoiles et Molécules !"
          text="Dans un univers où les étoiles scintillent et où les atomes dansent, l'exploration scientifique nous ouvre les portes de la connaissance. De l'infiniment grand à l'infiniment petit, chaque découverte nous émerveille et nous pousse à repousser les frontières du savoir. Préparez-vous à embarquer pour un périple captivant à travers les mystères de l'univers et les secrets de la matière !"
          direction={Direction.Right}
        />
      </Wrapper>
      <Wrapper title='Fade text'>
        <FadingText
          text="Imaginez-vous jongler avec les agrumes acidulés tout en exécutant des pas de danse enflammés sur un mince câble métallique. Cela ressemble à défier la gravité avec des fruits exotiques en harmonie avec des mélodies classiques qui vous transportent dans un monde de rythme et de mouvement !"
        />
      </Wrapper>
    </div>
  );
};

export default TextPage;
