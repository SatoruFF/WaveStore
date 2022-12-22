import React, { useContext } from 'react'
import { Navigate, Route, Routes} from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes, RouteModel } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter: any = () => {
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
            <Route path="/*" element={<Navigate replace to={SHOP_ROUTE}  />} />
      </Routes>
    );
}

export default AppRouter;