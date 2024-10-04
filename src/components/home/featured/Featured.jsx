import SectionTitle from "../../shared/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
       <section className="featured-image bg-fixed pt-8 my-20">
          <SectionTitle
      subTitle = {"Check it out"}
      title = {"featured item"}
      />
      <div className="flex justify-center items-center bg-slate-900 bg-opacity-50 pb-20 pt-12 px-36">
        <img className="w-80" src={featuredImg} alt="featured image" />
      <div className="ml-10 text-white">
        <p>Oct 03, 2024</p>
        <p className="uppercase">where can i get some?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus consequuntur cumque aspernatur veniam illo cum quaerat necessitatibus voluptatibus eaque corporis, reprehenderit sapiente repudiandae maxime deleniti in similique doloremque fugiat animi inventore? Animi, error. Officiis labore recusandae repellat, minus reiciendis quaerat alias vero nemo facere praesentium ea ex dolore! Eaque!</p>
        <button className="btn btn-outline capitalize text-white mt-4 border-0 border-b-4">order now</button>
      </div>
      </div>
       </section>
    );
};

export default Featured;