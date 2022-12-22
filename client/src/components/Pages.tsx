import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const Pages = observer(() => {
    const {device}: any = useContext(Context)
    const pages = [1, 2, 3, 4, 5]
    return (
        <div className="wrapper absolute w-1/3 z-10 bottom-6">
            <ul className='flex flex-row w-full items-center justify-center'>
                {pages.map((page: any) => 
                    <li key={page} className='mx-2 rounded-full w-10 items-center flex justify-center hover:bg-blue-600 bg-blue-400 p-2'>{page}</li>
                )}
            </ul>
        </div>
    );
})

export default Pages;