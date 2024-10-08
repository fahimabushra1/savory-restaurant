import React from 'react';
import FoodCard from '../shared/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {
    console.log(items)
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    
    return (
        <>
       <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       <div className='grid grid-cols-3 gap-10 mt-16'>
        {
            items.map(item=> <FoodCard
            key={item._id}
            item={item}
            />)
        }
        </div>
        </SwiperSlide>
      </Swiper>
        </>
    );
};

export default OrderTab;