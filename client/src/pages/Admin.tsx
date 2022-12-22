import React, { useState } from 'react'
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <div className="container flex flex-col my-10 items-center">
            <button className='mb-4 bg-teal-400 w-1/3 p-2 rounded' onClick={() => setTypeVisible(true)}> Add type </button>
            <button className='mb-4 bg-teal-400 w-1/3 p-2 rounded' onClick={() => setBrandVisible(true)}> Add brand </button>
            <button className='mb-4 bg-teal-400 w-1/3 p-2 rounded' onClick={() => setDeviceVisible(true)}> Add device </button>
            <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}></CreateBrand>
            <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}></CreateDevice>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}></CreateType>
        </div>
    );
}

export default Admin;