import SectionTitle from "../shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

useEffect(()=>{
    fetch("reviews.json")
    .then(res => res.json())
    .then(data =>setReviews(data))
},[])

    return (
        <section>
            <SectionTitle
      subTitle = {"What our client say"}
      title = {"testimonials"}
      />
      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {
        reviews.map(review =><SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center mx-24 my-16">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <FaQuoteLeft className="text-5xl my-4" />
                <p className="py-2">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
            </SwiperSlide>)
       }
      </Swiper>
      </div>
        </section>
    );
};

export default Testimonials;