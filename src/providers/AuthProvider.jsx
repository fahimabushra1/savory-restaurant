import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const fbSignIn =()=>{
        return signInWithPopup(auth, fbProvider)
    }

    const logOut =()=>{
        return signOut(auth).then(() => setUser(null))
    }

    const updateUserProfile = (name, photo, phoneNumber)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, phoneNumber: phoneNumber
        });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
                
                setLoading(false);
                console.log(currentUser)
            }else{
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
        return ()=>{
            return unsubscribe();
        }
    }),[axiosPublic];

const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    fbSignIn,
    logOut,
    updateUserProfile,
    loading}

    return (
       <AuthContext.Provider value= {authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;