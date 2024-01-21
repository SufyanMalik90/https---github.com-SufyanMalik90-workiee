import React from "react";
import "./Slide.scss";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (       
  <section class="text-gray-600 body-font flex justify-center ">
  <div class="container px-5 py-24 mx-auto  ">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Categories</h1>
        <div class="h-1 w-20 bg-[#0B7C2D] rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4 gap-8  justify-center">
      {children}
    </div>
  </div>
</section>





  

    // </div>

  );
};

export default Slide;
