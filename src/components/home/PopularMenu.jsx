import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import MenuItemList from '../shared/MenuItemList';

const PopularMenu = () => {
    const [menus,setMenus] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularMenu = data.filter(item=>item.category === "popular")
            setMenus(popularMenu)})
    },[])
    return (
      <section className='mb-12'>
          <SectionTitle
      subTitle = {"Popular items"}
      title = {"from our menu"}
      />
      <div className='grid grid-cols-2 gap-10'>
        {
            menus.map(item=> <MenuItemList
            key={item._id}
            item={item}
            />)
        }
      </div>
      </section>
    );
};

export default PopularMenu;