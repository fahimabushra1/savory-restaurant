import { FaTrashAlt } from "react-icons/fa";
import HelmetTitle from "../../components/shared/HelmetTitle";
import SectionTitle from "../../components/shared/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item)=> total + item.price,0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then(res=>{
            if(res.data.deletedCount > 0){
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });
    }
    return (
        <div className="-mt-8">
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
     {cart?.map((item, idx)=>  <tr key={item._id}>
        <th>
         {idx+1}
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
          <button onClick={()=>{handleDelete(item._id)}} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"/></button>
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