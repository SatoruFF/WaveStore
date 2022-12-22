import React, { useEffect, useState } from 'react';
import star from '../assets/star.png'
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice]: any = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div className="container flex flex-col">
            <div className="deviceTitle__space flex flex-row h-1/2">
                <div className="img w-1/3 m-9 shadow-2xl"> <img src={process.env.REACT_APP_API_URL + device.img} alt="" className='rounded' /> </div>
                <div className="rating w2/3 h-full ml-4 mt-9 flex flex-col">
                     <img src={star} alt="" className='w-14 h-14'/> 
                     <p className='my-4'> {device.name} <br /> {device.price} <br /> <p className='bg-teal-400 p-3 rounded my-3'>Add to cart list</p> </p>
                </div>

            </div>
            <div className="deviceDescription container mx-9">
                <ul>
                    {device.info.map((info: any) => 
                    <li className='bg-teal-300 my-2 p-2 rounded w-5/6'>{info.title}: {info.description}</li>
                        )}
                </ul>
            </div>
        </div>
    );
}

export default DevicePage;