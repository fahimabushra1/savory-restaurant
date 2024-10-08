import SectionTitle from '../shared/SectionTitle';
import MenuItemList from '../shared/MenuItemList';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter(item=>item.category === "popular");
    return (
      <section className='mb-12'>
          <SectionTitle
      subTitle = {"Popular items"}
      title = {"from our menu"}
      />
      <div className='grid grid-cols-2 gap-10'>
        {
            popular.map(item=> <MenuItemList
            key={item._id}
            item={item}
            />)
        }
      </div>
      </section>
    );
};

export default PopularMenu;