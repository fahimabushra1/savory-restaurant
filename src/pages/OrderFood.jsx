import Cover from '../components/shared/Cover';
import Helmet from '../components/shared/HelmetTitle';
import coverImage from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../hooks/useMenu';
import OrderTab from '../components/orderfood/OrderTab';
import { useParams } from 'react-router-dom';


const OrderFood = () => {
    const [categories] = ['salad', 'dessert', 'soup', 'pizza', 'drinks'];
    const {category}= useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();
    const salad = menus.filter(item=>item.category === "salad");
const pizza = menus.filter(item=>item.category === "pizza");
const dessert = menus.filter(item=>item.category === "dessert");
const soup = menus.filter(item=>item.category === "soup");
const drinks = menus.filter(item=>item.category === "drinks");
console.log(pizza)
    return (
        <div>
               <Helmet title={"order food"}/>
               <Cover image={coverImage} title={"our shop"} />
               <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
      <TabList>
        <Tab>salad</Tab>
        <Tab>dessert</Tab>
        <Tab>soup</Tab>
        <Tab>pizza</Tab>
        <Tab>drinks</Tab>
      </TabList>
      <TabPanel>
       <OrderTab items={salad}/>
      </TabPanel>
      <TabPanel>
       <OrderTab items={dessert}/>
      </TabPanel>
      <TabPanel>
       <OrderTab items={soup}/>
      </TabPanel>
      <TabPanel>
       <OrderTab items={pizza}/>
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinks}/>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default OrderFood;