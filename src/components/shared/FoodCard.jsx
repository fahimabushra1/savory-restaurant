

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
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
      <button className="btn btn-primary capitalize">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;