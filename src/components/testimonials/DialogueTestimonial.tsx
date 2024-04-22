const DialogueTestimonial = () => {
  return (
    <figure className="flex w-[550px]">
      <figcaption className='relative px-3 pt-5 rounded-l-lg border border-slate-400'>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" className='absolute top-5 -right-7' >
          <polygon points="30,0 0,30 0,0" fill="white"/>
        </svg>
        <blockquote
          className="relative italic text-sm px-8 text-justify w-full
            before:-top-3 before:left-0 before:content-['“'] before:absolute before:text-5xl before:font-['FontAwesome'] before:text-indigo-400
            after:right-2 after:content-['”'] after:absolute after:text-5xl after:font-['FontAwesome'] after:text-indigo-400
          "
        >
          I've been passionate about photography for years, and this camera has been my trusty companion on countless adventures. Allowing me to capture the perfect shot every time.
        </blockquote>
        <h2 className='font-medium uppercase mt-12'>Emily <span className="lowercase font-normal">- Adventure Photographer</span></h2>
      </figcaption>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
        alt="sq-sample4"
        className='rounded-r-lg w-1/3'
      />
    </figure>
  );
};

export default DialogueTestimonial;
