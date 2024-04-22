import SwipeCarousel from '../components/carousels/SwipeCarousel';
import Wrapper from '../components/Wrapper';

const CarouselPage = () => {
  return (
    <div>
      <Wrapper title='Swipe carousel' padding={false}>
        <SwipeCarousel />
      </Wrapper>
    </div>
  );
};

export default CarouselPage;
