// import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import HelmetTitle from "../../components/shared/HelmetTitle";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
axiosSecure.patch(`/users/admin/${user._id}`)
.then(res =>{
    console.log(res.data)
    if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now!`,
            showConfirmButton: false,
            timer: 1500
          });
    }
})
    }

    const handleDeleteUser = user =>{
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
            axiosSecure.delete(`/users/${user._id}`)
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
               subTitle = {"how many??"}
               title = {"manage all users"}
         />
         <div className="ml-8 bg-slate-300 p-4 text-black">
              <div className="flex justify-evenly bg-blue-300 p-4 mb-4">
              <h2 className="text-5xl capitalize text-black">total users: <span className="text-orange-500">{users?.length}</span></h2>
              </div>
         <div className="overflow-x-auto w-full">
<table className="table">
 {/* head */}
 <thead>
   <tr className="text-lg text-black">
     <th>#</th>
     <th>Image</th>
     <th>Name</th>
     <th>Email</th>
     <th>Role</th>
     <th>action</th>
     <th></th>
   </tr>
 </thead>
 <tbody>
  {users?.map((user, idx)=>  <tr key={user._id}>
     <th>
      {idx+1}
     </th>
     <td>
       <div className="flex items-center gap-3">
         <div className="avatar">
           <div className="mask mask-squircle h-12 w-12">
             <img
               src={user.image}
               alt="Avatar Tailwind CSS Component" />
           </div>
         </div>
         </div>
     </td>
     <td>
     {user.name}
     </td>
     <td>{user.email}</td>
     <th className=" text-orange-600">
       {
        user.role === 'admin' ? 'ADMIN' :
        <button onClick={()=>{handleMakeAdmin(user)}} className="btn btn-outline"><FaUsers className="bg-orange-600 p-0 rounded-md text-white text-2xl"/></button>
       }
    </th>
     <th>
       <button onClick={()=>{handleDeleteUser(user)}} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"/></button>
     </th>
   </tr>)}
 </tbody>
</table>
</div>
</div>
     </div>
    );
};

export default AllUsers;