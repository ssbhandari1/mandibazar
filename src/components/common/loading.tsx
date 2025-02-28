import React from 'react'
import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-green-200'>
            <div className="flex gap-4">
                <Spinner size="lg" />
            </div>

        </div>
    )
}

export default Loading