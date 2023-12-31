import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="profile-container">
      <button onClick={openMenu}>
        <i className="fa-solid fa-circle-user" style={{color: "#a19ef0"}} />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div className={`main-drop-down-container${showMenu ? ' open' : ''}`}>
            <div className='greetings-line'>Hello, {user.firstName}</div>
            <div className='email-line'>{user.email}</div>
            <NavLink className='manage-line' to='/spots/current'>
              Manage Spots
            </NavLink>
            <div className='log-out-container'>
            <button className='logout-button' onClick={logout}>Log Out</button>
            </div>
          </div>
        ) : (
          <div className='drop-down-container'>
            <OpenModalMenuItem
              itemText='Log In'
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText='Sign Up'
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </div>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;


// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from 'react-redux';
// import { useHistory, NavLink } from "react-router-dom";
// import * as sessionActions from '../../store/session';
// import OpenModalMenuItem from './OpenModalMenuItem';
// import LoginFormModal from '../LoginFormModal';
// import SignupFormModal from '../SignupFormModal';
// import './Navigation.css';

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [showMenu, setShowMenu] = useState(false);
//   const ulRef = useRef();

//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };

//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = (e) => {
//       if (!ulRef.current.contains(e.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener('click', closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const closeMenu = () => setShowMenu(false);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//     closeMenu();
//     history.push('/')
//   };

//   const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

//   return (
//     <div className="profile-container">
//       <button onClick={openMenu}>
//         <i className="fa-solid fa-circle-user" style={{color: "#a19ef0"}} />
//       </button>
//       <ul className={ulClassName} ref={ulRef}>
//         {user ? (
//           <div className='main-drop-down-container'>
//             <div className='greetings-line'>Hello, {user.firstName}</div>
//             <div className='email-line'>{user.email}</div>
//             <NavLink className='manage-line' to='/spots/current'>
//               Manage Spots
//             </NavLink>
//             <button className='logout-button' onClick={logout}>Log Out</button>
//           </div>
//         ) : (
//           <div className='drop-down-container'>
//             <OpenModalMenuItem
//               itemText='Log In'
//               onItemClick={closeMenu}
//               modalComponent={<LoginFormModal />}
//             />
//             <OpenModalMenuItem
//               itemText='Sign Up'
//               onItemClick={closeMenu}
//               modalComponent={<SignupFormModal />}
//             />
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default ProfileButton;


// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from 'react-redux';
// import { useHistory, NavLink } from "react-router-dom";
// import * as sessionActions from '../../store/session';
// import OpenModalMenuItem from './OpenModalMenuItem';
// import LoginFormModal from '../LoginFormModal';
// import SignupFormModal from '../SignupFormModal';
// import './Navigation.css'

// function ProfileButton({ user }) {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [showMenu, setShowMenu] = useState(false);
//     const ulRef = useRef();

//     const openMenu = () => {
//       if (showMenu) return;
//       setShowMenu(true);
//     };

//     useEffect(() => {
//       if (!showMenu) return;

//       const closeMenu = (e) => {
//         if (!ulRef.current.contains(e.target)) {
//           setShowMenu(false);
//         }
//       };

//       document.addEventListener('click', closeMenu);

//       return () => document.removeEventListener("click", closeMenu);
//     }, [showMenu]);

//     const closeMenu = () => setShowMenu(false);

//     const logout = (e) => {
//       e.preventDefault();
//       dispatch(sessionActions.logout());
//       closeMenu();
//       history.push('/')
//     };

//     const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

//     return (
//         <>
//           <div className="create-spot-container">
//             {user ? (
//               <NavLink className="create-line" to='/spots/new'>
//                 Create a New Spot
//               </NavLink>
//             ) : (
//               <></>
//             )}
//       <button onClick={openMenu}>
//         <i className="fa-solid fa-circle-user" style={{color: "#a19ef0"}} />
//       </button>
//           <ul className={ulClassName} ref={ulRef}>
//             {user ? (
//               <div className='main-drop-down-container'>
//                   <div className='greetings-line'>Hello, {user.firstName}</div>
//                   <div className='email-line'>{user.email}</div>
//                   <NavLink className='manage-line' to='/spots/current'>
//                     Manage Spots
//                   </NavLink>
//                 <button className='logout-button' onClick={logout}>Log Out</button>
//               </div>
//             ) : (
//                 <div className='drop-down-container'>
//                   <OpenModalMenuItem
//                     itemText='Log In'
//                     onItemClick={closeMenu}
//                     modalComponent={<LoginFormModal />}
//                   />

//                   <OpenModalMenuItem
//                     itemText='Sign Up'
//                     onItemClick={closeMenu}
//                     modalComponent={<SignupFormModal />}
//                     />

//                 </div>
//             )}
//           </ul>
//           </div>
//         </>
//       );
//     }

//     export default ProfileButton;

// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import * as sessionActions from '../../store/session';
// import OpenModalMenuItem from './OpenModalMenuItem';
// import LoginFormModal from '../LoginFormModal';
// import SignupFormModal from '../SignupFormModal';

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [showMenu, setShowMenu] = useState(false);
//   const ulRef = useRef();

//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };

//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = (e) => {
//       if (!ulRef.current.contains(e.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener('click', closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const closeMenu = () => setShowMenu(false);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//     closeMenu();
//     history.push('/')
//   };

//   const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

//   return (
//     <>
//       <button onClick={openMenu}>
//         <i className="fa-solid fa-circle-user" style={{color: "#a19ef0"}} />
//       </button>
//       <ul className={ulClassName} ref={ulRef}>
//         {user ? (
//           <>

//             <li>{user.username}</li>
//             <li>{user.firstName} {user.lastName}</li>
//             <li>{user.email}</li>
//             <li>
//               <button onClick={logout}>Log Out</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <OpenModalMenuItem
//               itemText="Log In"
//               onItemClick={closeMenu}
//               modalComponent={<LoginFormModal />}
//             />
//             <OpenModalMenuItem
//               itemText="Sign Up"
//               onItemClick={closeMenu}
//               modalComponent={<SignupFormModal />}
//             />
//           </>
//         )}
//       </ul>
//     </>
//   );
// }

// export default ProfileButton;
