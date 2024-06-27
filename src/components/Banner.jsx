import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';
import banner4 from '../assets/images/banner-4.jpg';
import banner5 from '../assets/images/banner-5.jpg';
import banner6 from '../assets/images/banner-6.jpg';
import banner7 from '../assets/images/banner-7.jpg';
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2}/>
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner6} />
                </div>
                <div>
                    <img src={banner7} />
                </div>
            </Carousel>
    );
};

export default Banner;