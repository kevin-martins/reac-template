import PaginedCarousel from '../../../components/carousels/PaginedCarousel';
import SwipeCarousel from '../../../components/carousels/SwipeCarousel';
import Wrapper from '../../../components/Wrapper';

const CarouselPage = () => {
  return (
    <div>
      <Wrapper title='Dotted Carousel' padding={false}>
        <SwipeCarousel />
      </Wrapper>
      <Wrapper title='Pagined Carousel' padding={false}>
        <PaginedCarousel />
      </Wrapper>
    </div>
  );
};

export default CarouselPage;
