import HelmetTitle from "../../components/shared/HelmetTitle";
import SectionTitle from "../../components/shared/SectionTitle";
import useCart from "../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item)=> total + item.price,0)
    return (
        <div>
           <HelmetTitle title={"cart"}/>
           <SectionTitle
                  subTitle = {"my cart"}
                  title = {"wanna add more"}
            />
            <div className="ml-8 bg-slate-300 p-4 text-black">
                 <div className="flex justify-evenly bg-blue-300 p-4 mb-4">
                 <h2 className="text-5xl capitalize text-black">total items: <span className="text-blue-600">{cart.length}</span></h2>
                 <h2 className="text-5xl capitalize text-black">total price: <span className="text-orange-500">${totalPrice}</span></h2>
                 <button className="bg-blue-400 px-4 py-2 rounded-xl text-black text-lg">pay</button>
                 </div>
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg text-black">
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {cart?.map(item=>  <tr key={item._id}>
        <th>
         
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </div>
        </td>
        <td>
        {item.name}
        </td>
        <td>${item.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)}
     
    </tbody>
  </table>
</div>
</div>
        </div>
    );
};

export default Cart;