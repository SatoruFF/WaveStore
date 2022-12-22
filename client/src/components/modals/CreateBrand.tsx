import React, {useState} from 'react';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({show, onHide}: any) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => setValue(''))
        onHide()
    }

    return (
        <div className={show ? 'wrapper absolute z-10 top-0 bottom-0 left-0 right-0 bg-black opacity-80 flex justify-center items-center' : 'hidden'}>
            <div className="card bg-white w-1/3 h-1/3 rounded items-center p-3 flex flex-col">
                <p> Add type </p>
                <form action="">
                    <input type="text" placeholder='Input brand name here...' className='my-3 w-4/5 p-2 border-solid border-2 border-sky-500' value={value} onChange={(e: any) => setValue(e.target.value)}/>
                </form>
                <div className="btn__space flex flex-row mt-12">
                    <button className='mx-4 bg-blue-300 p-2 rounded' onClick={onHide}>Exit</button>
                    <button className='mx-4 bg-blue-300 p-2 rounded' onClick={addBrand}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default CreateBrand;