import { observer } from 'mobx-react-lite';
import { useContext } from 'react'
import { Context } from '..';
import React from 'react';

const BrandBar = observer(() => {
    const {device}: any = useContext(Context)
    return (
        <div className="container flex">
            <div className=" p-6 rounded-lg shadow-2xl my-5 bg-white max-w-sm flex flex-row mx-4">
                {device.brands.map((brand: any) =>
                    <div
                        style={{cursor:'pointer'}}
                        key={brand.id}
                        className={brand.id === device.selectedBrand.id ? "p-3 mx-4 active:bg-slate-400 bg-blue-400 rounded" : "p-3 mx-4"}
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                </div>
            )}
        </div>
        </div>
    );
})

export default BrandBar;