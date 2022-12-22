import { observer } from 'mobx-react-lite';
import React, { useState, useContext } from 'react'
import { Context } from '..';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {
    const {user}: any = useContext(Context)
    const navigate = useNavigate()
    const location: any = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async (e: any) => {
        try {
            let data: any
            e.preventDefault()
            if (isLogin) {
                data  = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (error: any) {
            alert(error.response.data.message)
        }
    }

    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="form__space bg-black w-1/3 h-80 p-6 rounded opacity-80">
                <div className="form__title w-full text-white text-center justify-center flex"> {isLogin ? "Authorization" : "Registration"} </div>
                <form action="" className='flex justify-center items-center flex-col'>
                    <input className='my-10 w-3/4 p-2 rounded' type="text" placeholder='input email here...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='p-2 w-3/4 rounded' type="password" placeholder='input password here...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="form__options flex flex-row justify-between w-80 mt-6">
                        <div className="form__exist bg-yellow w-2/5 h-3 text-white items-center">
                            {isLogin ? <p> No account? <br /> <NavLink to={REGISTRATION_ROUTE} className='text-red-400'> Registration </NavLink> </p>
                            : <p> Have an account? <br /> <NavLink to={LOGIN_ROUTE} className='text-red-400'> Login </NavLink> </p>}
                        </div>
                        <button type='submit' className='bg-white mt-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={click}> Submit </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
})

export default Auth;