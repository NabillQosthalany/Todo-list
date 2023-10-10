import React from 'react';
import {AiOutlineCloudDownload, AiOutlineCloudUpload} from "react-icons/ai";

function ButtonArchive({onClick, archived}) {
    const buttonClasses = archived === true
        ? 'w-full bg-green-600 w-100 rounded-lg px-3 py-3 mr-3 text-white hover:bg-green-700 flex items-center'
        : 'w-full bg-indigo-400 w-100 rounded-lg px-3 py-3 mr-3 text-white hover:bg-indigo-500 flex items-center';
    const buttonText = archived === true ? 'Un Archive' : 'Archive'
    return (
        <button
            onClick={onClick}
            className={buttonClasses}>
            {archived === true ? <AiOutlineCloudUpload className="mr-2"/> : <AiOutlineCloudDownload className="mr-2"/>}

            {buttonText}
        </button>
    );
}

export default ButtonArchive;
