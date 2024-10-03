import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import Featured from "../components/home/Featured";
import PopularMenu from "../components/home/PopularMenu";


const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/>
          <PopularMenu/>
          <Featured/>
        </div>
    );
};

export default Home;