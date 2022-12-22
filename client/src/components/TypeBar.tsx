import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';

const TypeBar = observer(() => {
    const {device}: any = useContext(Context)
    return  (
        <div className="container h-2/3">
            <div className="flex justify-center">
                <ul className="bg-white rounded-lg border shadow-2xl border-gray-200 w-96 text-gray-900">
                {device.types.map((type: any) =>
                    <li className={type.id === device.selectedType.id ? "px-6 py-2 border-b border-gray-200 bg-blue-400 w-full" : "px-6 py-2 border-b border-gray-200 w-full"}
                        style={{cursor: 'pointer'}}
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}
                        
                    </li>
                    )}
                </ul>
            </div>
        </div>
    );
})

export default TypeBar;