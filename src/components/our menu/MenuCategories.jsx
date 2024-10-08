import React from 'react';
import MenuItemList from '../shared/MenuItemList';
import Cover from '../shared/Cover';

const MenuCategories = ({items, title, image}) => {
    console.log(items)
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
        </div>
    );
};

export default MenuCategories;