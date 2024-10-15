import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({item}) => {
const {user} = useAuth();
const navigate = useNavigate();
const location = useLocation();
const axiosSecure = useAxiosSecure();
    const {name, image, price, recipe, _id} = item;

    const handleAddToCart = () =>{
    if(user && user.email){
const cartItem = {
  menuId : _id,
  email : user.email,
  name,
  image,
  price
}
axiosSecure.post("/carts", cartItem)
.then(res => {
  console.log(res.data)
  if(res.data.insertedId){
    toast.success(`${name} has been saved successfully`)
  }
})
    }
    else{
      toast.warning("you are not logged in. please log in")
       navigate("/login", {state:{from: location}})
    }
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="food image" />
  </figure>
  <p className='bg-slate-900 text-white p-2 absolute top-0 left-2 mt-2 rounded-xl'>$ {price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=> handleAddToCart(item)} className="border-b-4 border-yellow-400 text-white bg-slate-400 rounded-lg py-2 px-4 capitalize">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;