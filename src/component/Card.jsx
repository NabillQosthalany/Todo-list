import React from 'react';
import ButtonArchive from "./ButtonArchive.jsx";
import ButtonDelete from "./ButtonDelete.jsx";
import {showFormattedDate} from "../utils/index.js";

function Card({onDelete, onArchive, data}) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                data.map((item) => (
                    <div className="max-w-md rounded overflow-hidden shadow-lg bg-blue-600" key={item.id}>
                        <div className="px-10 py-4">
                            <h1 className="text-center text-white mb-3 font-bold">{item.title}</h1>
                            <p className="text-white my-3">Tanggal Di buat : {showFormattedDate(item.createdAt)}</p>
                            <p className="text-gray-200 font-light">{item.body}</p>
                            <p className="text-green-400 mt-3">Archived : {item.archived === true ? 'Yes' : 'No'}</p>
                            <div className="flex justify-center mt-3">
                                <ButtonArchive archived={item.archived} onClick={() => onArchive(item.id)}/>
                                <ButtonDelete onDelete={() => onDelete(item.id)} id={item.id}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Card;
