import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //googleProvider
  const googleProvider = new GoogleAuthProvider();

  //signinwithemailandpassword

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //const singInUser

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signInwithGoogle

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //handlsignout

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    creatNewUser,
    singInUser,
    signInWithGoogle,
    handleSignOut

  }

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;