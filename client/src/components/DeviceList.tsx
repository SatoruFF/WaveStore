import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device}: any = useContext(Context)
    return (
        <div className="wrapper">
                <div className="flex flex-wrap">
                {device.devices.map((device: any) =>
                    <DeviceItem key={device.id} device={device}/>
                )}
        </div>
        </div>
    );
})

export default DeviceList;