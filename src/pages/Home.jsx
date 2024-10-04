import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import Featured from "../components/home/featured/Featured";
import PopularMenu from "../components/home/PopularMenu";
import Testimonials from "../components/home/Testimonials";


const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/>
          <PopularMenu/>
          <Featured/>
          <Testimonials/>
        </div>
    );
};

export default Home;