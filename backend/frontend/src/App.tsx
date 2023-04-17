import { Outlet } from 'react-router-dom'
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import { getToken } from './modules/components/CsrfToken';
import { useEffect, useState } from 'react';
import { currUser } from './modules/components/utilities';
import { createContext } from 'react';
import { ReactDOM } from 'react';
import React from 'react';

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);

  getToken()

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);


  return(     
    <div>
  <AppAppBar/>
  <UserContext.Provider value={{user, setUser}} >
        <Outlet />
    </UserContext.Provider>
  </div>
  )
 };


export default withRoot(App)
