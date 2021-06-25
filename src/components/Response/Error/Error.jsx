import React from 'react'

const Error = (props) => {
    let error =props.error;
    return (
        <div className="grid h-12 text-red-600 bg-red-200 place-items-center">
            <p>{error}</p>
        </div>
    )
}

export default Error
