import React from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '.';
import { useState } from 'react';
import { useEffect } from 'react';
import { check } from './http/userAPI';
import LoadingSpinner from './components/LoadingSpinner';


const App = observer(() => {
  const {user}: any = useContext(Context)
  const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
        }).finally(() => setIsLoading(false))

    },[])

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
      <BrowserRouter>
        <MyNavbar/>
        <AppRouter/>
      </BrowserRouter>
  );
})

export default App;
