import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}: any) => {
    const navigate = useNavigate()
    return (
        <div className="wrapper">
            <div className="flex justify-center" onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)}>
                <div className="card bg-blue-300 w-60 h-60 m-4 rounded shadow-2xl flex flex-col items-center p-3 flex-wrap">
                    <div className="card__title">{device.name}</div>
                    <img src={process.env.REACT_APP_API_URL + device.img} className='w-1/2 h-1/3 my-3 rounded' alt="" />
                    <div className="price"> {device.price}$ </div>
                    <div className="rating">rating: {device.rating} </div>
                </div>
            </div>
        </div>
    );
}

export default DeviceItem;