import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

const CreateDevice = observer(({show, onHide}: any) => {
    const {device}: any = useContext(Context)
    const [info, setInfo]: any = useState([])
    const [name, setName]: any = useState('')
    const [price, setPrice]: any = useState(0)
    const [file, setFile]: any = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number: number) => {
        setInfo(info.filter((i: any) => i.number !== number))
    }

    const selectFile = (e: any) => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key: any, value: any, number: any) => {
        setInfo(info.map((i: any) => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then((data: any) => onHide())
    }

    return (
        <div className={show ? 'wrapper absolute top-0 bottom-0 left-0 right-0 bg-black flex justify-center items-center' : 'hidden'}>
            <div className="card bg-white w-1/2 h-min rounded items-center p-3 flex flex-col opacity-100">
                <p> Add type </p>
                <form action="" className='flex items-center flex-col w-full'>
                <select className="w-4/5 p-2.5 text-gray-500 bg-white my-3 rounded-md shadow-sm outline-none appearance-none border-solid border-2 border-sky-500 focus:border-indigo-600">
                    <option key={device.id}>{device.selectedType.name || 'Select type'}</option>
                        {device.types.map((type: any) => 
                        <option value={type.name} key={type.id} onClick={() => device.setSelectedType(type)}>{type.name}</option>
                    )}
                </select>
                <select className="w-4/5 p-2.5 text-gray-500 bg-white my-3 rounded-md shadow-sm outline-none appearance-none border-solid border-2 border-sky-500 focus:border-indigo-600">
                    <option key={device.id}>{device.selectedBrand.name || 'Select brand'}</option>
                        {device.brands.map((brand: any) => 
                        <option value={brand.name} key={brand.id} onClick={() => device.setSelectedBrand(brand)}>{brand.name}</option>
                    )}
                </select>
                    <input type="text" placeholder='Input device name here...' className='my-3 w-4/5 p-2 border-solid border-2 border-sky-500' value={name} onChange={(e: any) => setName(e.target.value)}/>
                    <input type="number" placeholder='Input price here...' className='my-3 w-4/5 p-2 border-solid border-2 border-sky-500' value={price} onChange={(e: any) => setPrice(Number(e.target.value))}/>
                    <input type="file" className='my-3 w-4/5 p-2 border-solid border-2 border-sky-500' onChange={selectFile}/>
                </form>
                <div className="btn__space flex flex-row mt-12">
                    <button className='mx-4 bg-blue-300 p-2 rounded' onClick={onHide}>Exit</button>
                    <button className='mx-4 bg-blue-300 p-2 rounded' onClick={addDevice}>Add</button>
                </div>
                <button className='mx-4 my-4 bg-blue-300 p-2 rounded' onClick={addInfo}>Add new property</button>
                {info.map((i: any) => 
                <div className="newProperty border-dashed border-sky-500 border-2 " key={i.number}>
                    <input type="text" placeholder='input character name here...' className='text-black mx-2 border-solid border-2 border-sky-500' value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)}/>
                    <input type="text" placeholder='input description here...' className='text-black mx-2 border-solid border-2 border-sky-500' value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)}/>
                    <button className='bg-blue-300 rounded m-2 p-2 ' onClick={() => removeInfo(i.number)}>delete property</button>
                </div>
                )}
            </div>
        </div>
    );
})

export default CreateDevice;