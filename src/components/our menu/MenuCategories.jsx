import React from 'react';
import MenuItemList from '../shared/MenuItemList';
import Cover from '../shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategories = ({items, title, image}) => {
    return (
        <div className='pt-8'>
              {title && <Cover image={image} title={title} />}
             <div className='grid grid-cols-2 gap-10 mt-16'>
        {
            items.map(item=> <MenuItemList
            key={item._id}
            item={item}
            />)
        }
      </div>
     <Link to={`/order/${title}`}><button className="btn btn-outline capitalize text-white mt-4 border-0 border-b-4 flex mx-auto">order your favourite food</button></Link>
        </div>
    );
};

export default MenuCategories;