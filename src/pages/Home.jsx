import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import Featured from "../components/home/featured/Featured";
import PopularMenu from "../components/home/PopularMenu";
import Testimonials from "../components/home/Testimonials";
import Helmet from '../components/shared/HelmetTitle';


const Home = () => {
    return (
        <div>
           <Helmet title={"home"}/>
          <Banner/>
          <Category/>
          <PopularMenu/>
          <Featured/>
          <Testimonials/>
        </div>
    );
};

export default Home;