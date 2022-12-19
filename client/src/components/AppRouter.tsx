import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes, RouteModel } from '../routes';

const AppRouter = () => {
    const {user}: any = useContext(Context)
    return (
        <Routes>
            {user.isAuth && 
            authRoutes.map(({path, Component}: RouteModel) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}: RouteModel) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
      </Routes>
    );
}

export default AppRouter;