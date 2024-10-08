import React from 'react';
import Helmet from '../components/shared/HelmetTitle';
import image1 from '../assets/menu/banner3.jpg';
import dessertImg from '../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';
import saladImg from '../assets/menu/salad-bg.jpg';
import useMenu from '../hooks/useMenu';
import SectionTitle from '../components/shared/SectionTitle';
import MenuCategories from '../components/our menu/MenuCategories';
import Cover from '../components/shared/Cover';

const OurMenu = () => {
    const [menus] = useMenu();
    console.log(menus)
    const salad = menus.filter(item=>item.category === "salad");
const pizza = menus.filter(item=>item.category === "pizza");
const dessert = menus.filter(item=>item.category === "dessert");
const soup = menus.filter(item=>item.category === "soup");
const offered = menus.filter(item=>item.category === "offered");
console.log(offered, pizza)
    return (
        <div>
         <Helmet title={"menu"}/>
         <Cover image={image1} title={"our menu"} />
         <SectionTitle title={"today's offer"} subTitle={"Don't miss"}/>
         <MenuCategories items={offered}/>
         <MenuCategories items={salad} title={"salad"} image={saladImg}/>
         <MenuCategories items={dessert} title={"dessert"} image={dessertImg}/>
         <MenuCategories items={soup} title={"soup"} image={soupImg}/>
         <MenuCategories items={pizza} title={"pizza"} image={pizzaImg}/>
        </div>
    );
};

export default OurMenu;