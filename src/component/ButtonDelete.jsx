import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";

function ButtonDelete({id, onDelete}) {
    const handleDelete = () => {
        onDelete(id)
    }
    return (
        <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 w-24 rounded-lg px-2 py-2 text-white flex items-center justify-center">
            <AiOutlineDelete className="mr-2"/>Hapus
        </button>
    );
}

export default ButtonDelete;
