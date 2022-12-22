import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="wrapper absolute left-0 right-0 top-0 bottom-0 bg-white">
            <div className="flex justify-center items-center h-full w-full">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-sky-400"></div>
            </div>
        </div>
    );
}

export default LoadingSpinner;