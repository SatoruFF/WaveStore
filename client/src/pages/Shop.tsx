import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';


const Shop = observer(() => {
    const {device}: any = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

    return (
        <div className="container">
            <div className="container__space flex">
                <div className="typeBar__space my-7 mx-7">
                    <TypeBar></TypeBar>
                </div>
                <div className="shopItems__space">
                    <BrandBar></BrandBar>
                    <DeviceList></DeviceList>
                    <Pages></Pages>
                </div>
            </div>
        </div>
    );
})

export default Shop;