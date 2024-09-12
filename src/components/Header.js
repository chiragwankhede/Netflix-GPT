// import { signOut, onAuthStateChanged } from 'firebase/auth'
// import React from 'react'
// import { auth } from '../utils/firebase'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { addUser, removeUser } from '../utils/userSlice'
// import { useEffect } from 'react'
// import { LOGO } from '../utils/constants'

// const Header = () => {
//   const navigate=useNavigate();
//   const user=useSelector((store)=>store.user);
//   const dispatch=useDispatch();

//   const handleSignout=()=>{
//     signOut(auth).then(()=>{
//       //When user signs out, he should navigate to homepage
//       navigate("/");
//     })
//     .catch((error)=>{
//       //When error occurs, it should navigate to error page
//       navigate("/error")
//     })
//   }

// // This useEffect is responsible for listening to authentication state changes, 
// // and when a user signs in or signs out, it dispatches the appropriate actions (addUser or removeUser) to update the Redux store & navigate to the respective pages
//   useEffect(()=>{
//    const unsunscribe= onAuthStateChanged(auth, (user) => {
//     if (user) {
//         //When the user signs in
//         const {uid, email, displayName} = user;

//         // Dispatching an action to the Redux store with user data as payload
//         dispatch(
//             addUser(
//                 {
//                     uid: uid, 
//                     email:email, 
//                     displayName:displayName
//                 }
//             )
//         );
//         //dispatching an action (addUser) to update the state of your Redux store with the user data obtained when the user signs in.
//         //The reducer responds to this action by setting the state to the provided user data.

//         //When the user successfully logs in, it should redirect to /browse page
//         navigate("/browse");
     
//     } else {
//         // User is signed out
//         dispatch(removeUser());
//         //When the user logs out, it should redirect to homepage
//         navigate("/");
//     }
//     });

//     //Unsubscribing when the Header component unmounts, unsubscribe is a function provided by firebase
//     return ()=>unsunscribe();

// },[])

//   return (
//     <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
//         <img 
//         className='w-44'
//         src={LOGO}
//            alt='logo'
//         />
//         {/* Display Sign out button when user signs in  */}
//         {user &&(
//           <div className='flex p-4 gap-2'>
//             <img
//             className='w-12 h-12'
//               alt='userIcon'
//               src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
//             />
//             <button onClick={handleSignout}
//             className='font-bold text-white '>SIgn Out</button>
//           </div>
//         )}
//     </div>
//   )
// }

// export default Header

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    },[]);

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  });

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white pl-3 ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;