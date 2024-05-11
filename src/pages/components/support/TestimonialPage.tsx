import React from 'react'
import DialogueTestimonial from '../../../components/testimonials/DialogueTestimonial';
import Wrapper from '../../../components/Wrapper';
import OppositeAutoScroll from '../../../components/testimonials/OppositeAutoScroll';

const TestimonialPage = () => {
  return (
    <div>
      <Wrapper title='Dialogue'>
        <DialogueTestimonial />
      </Wrapper>
      <Wrapper title='Opposite Auto Scroll' padding={false}>
        <OppositeAutoScroll />
      </Wrapper>
    </div>
  );
};

export default TestimonialPage;
