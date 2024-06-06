import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//react icon
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import propic from "../assets/profile.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-6 px-2 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}

              <div className="mt-7">
                <p className="mb-5"></p>I recently purchased this book and I
                must say, it exceeded my expectations. The author's writing
                style is captivating, and the storyline kept me engaged from
                start to finish. Highly recommended!
                <Avatar img={propic} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mark Ping</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-6 px-2 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}

              <div className="mt-7">
                <p className="mb-5"></p>I absolutely loved this book! The
                characters were well-developed, and the plot twists kept me on
                the edge of my seat. I couldn't put it down until I finished it.
                <Avatar img={propic} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Alice Smith</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-6 px-2 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}

              <div className="mt-7">
                <p className="mb-5"></p>As an avid reader, I'm always on the
                lookout for new books, and this one did not disappoint. The
                story was beautifully written, and the themes explored were
                thought-provoking. I'll definitely be reading more from this
                author.
                <Avatar img={propic} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Bob Johnson</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-6 px-2 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}

              <div className="mt-7">
                <p className="mb-5"></p>I absolutely loved this book! The
                characters were well-developed, and the plot twists kept me on
                the edge of my seat.
                <Avatar img={propic} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">John Doe</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
