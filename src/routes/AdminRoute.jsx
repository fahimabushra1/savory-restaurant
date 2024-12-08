import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const AdminRoute = ({children}) => {
const {user,loading} = useAuth();
const [isAdmin, isAdminLoading] = useAdmin();
const location = useLocation();

if(loading || isAdminLoading){
    return <LoadingSpinner/>
}
if(user && isAdmin){
return children;
}
return <Navigate to = {'/login'} state={{from:location}} replace/>
};

export default AdminRoute;