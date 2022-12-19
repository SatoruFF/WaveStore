import React from 'react'
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="form__space bg-black w-1/3 h-80 p-6 rounded opacity-80">
                <div className="form__title w-full text-white text-center justify-center flex"> Authorization </div>
                <form action="" className='flex justify-center items-center flex-col'>
                    <input className='my-10 w-3/4 p-2 rounded' type="text" placeholder='input email here...'/>
                    <input className='p-2 w-3/4 rounded' type="text" placeholder='input password here...'/>
                    <div className="form__options flex flex-row justify-between w-80 mt-6">
                        <div className="form__exist bg-yellow w-2/5 h-3 text-white items-center">
                            <p> No account? </p>
                            <p> <NavLink to={REGISTRATION_ROUTE} className='text-red-400' > Registration </NavLink> </p>
                        </div>
                        <button type='submit' className='bg-white mt-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Submit </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Auth;