import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Testimonials.css';

const reviews = [
  { name: 'Jane', text: 'Best cakes ever!' },
  { name: 'Mike', text: 'Loved the chocolate cake!' },
  { name: 'Anna', text: 'The strawberry cake is amazing!' },
  { name: 'Leo', text: 'Perfect vanilla cake!' },
  { name: 'Sophia', text: 'Beautifully decorated cakes!' },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="text2">Customer Reviews</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((rev, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card">
              <p>"{rev.text}"</p>
              <span>- {rev.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
