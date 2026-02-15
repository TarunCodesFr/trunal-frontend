import React from 'react';

const LoadingUtil = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>

                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingUtil;
