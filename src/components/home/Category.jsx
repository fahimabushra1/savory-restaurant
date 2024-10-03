import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../shared/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
      subTitle = {"From 11am to 10pm"}
      title = {"order online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1 image" />
          <h3 className="text-white uppercase text-4xl -mt-20 drop-shadow-2xl text-center">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2 image" />
          <h3 className="text-white uppercase text-4xl -mt-20 drop-shadow-2xl text-center">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3 image" />
          <h3 className="text-white uppercase text-4xl -mt-20 drop-shadow-2xl text-center">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4 image" />
          <h3 className="text-white uppercase text-4xl -mt-20 drop-shadow-2xl text-center">
            dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5 image" />
          <h3 className="text-white uppercase text-4xl -mt-20 drop-shadow-2xl text-center">
            veggies
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
