import SwipeCarousel from '../components/carousels/SwipeCarousel';
import Wrapper from '../components/Wrapper';

const CarouselPage = () => {
  return (
    <div>
      <Wrapper title='Swipe carousel' padding={false}>
        <SwipeCarousel />
      </Wrapper>
      {/* <div className="py-2">
        <div className="bg-white min-h-[250px] grid place-content-center border border-black">
        <SwipeCarousel />
        </div>
      </div> */}
    </div>
  );
};

export default CarouselPage;
