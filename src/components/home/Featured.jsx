import SectionTitle from "../shared/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
       <section>
          <SectionTitle
      subTitle = {"Check it out"}
      title = {"featured item"}
      />
      <div className="flex justify-center items-center py-8 px-16">
        <img className="w-80" src={featuredImg} alt="featured image" />
      <div className="ml-10">
        <p>oct 03, 2024</p>
        <p className="uppercase">where can i get some?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus consequuntur cumque aspernatur veniam illo cum quaerat necessitatibus voluptatibus eaque corporis, reprehenderit sapiente repudiandae maxime deleniti in similique doloremque fugiat animi inventore? Animi, error. Officiis labore recusandae repellat, minus reiciendis quaerat alias vero nemo facere praesentium ea ex dolore! Eaque!</p>
        <button className="btn btn-outline capitalize">order now</button>
      </div>
      </div>
       </section>
    );
};

export default Featured;