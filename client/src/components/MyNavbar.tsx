import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const MyNavbar = observer(() => {
    const {user}: any = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <div className="navBar h-16 bg-black opacity-80 items-center flex container relative w-full">
            <div className="navbar__item  mx-10"> <NavLink to={SHOP_ROUTE} className='text-white'> WaveStore </NavLink> </div>
            
                {user.isAuth ?
                <nav className='flex flex-row ml-auto mr-11'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4' onClick={()=> navigate(ADMIN_ROUTE)}>Admin panel</button>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4' onClick={()=> logOut()}>Exit</button>
                </nav>
                :
                <nav className='ml-auto'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4' onClick={() => navigate(LOGIN_ROUTE)}>Authorization</button>
                </nav>
                }
            
        </div>
    );
})

export default MyNavbar;